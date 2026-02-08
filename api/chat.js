/**
 * ================================================================
 * PetCare+ Claude API Endpoint
 * ================================================================
 * 
 * Vercel Serverless Function
 * 안전한 Claude API 연결
 * 
 * 사용법:
 * POST /api/chat
 * Body: { message: "사용자 메시지", isAdmin: false }
 * 
 * ================================================================
 */

export default async function handler(req, res) {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // OPTIONS 요청 처리
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // POST만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, isAdmin = false } = req.body;

    // 입력 검증
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid message' });
    }

    // 시스템 프롬프트 설정
    const systemPrompt = isAdmin
      ? `당신은 PetCare+ CTO Claude입니다. 
이희전 대표님과 대화하고 있습니다.
전문적이고 친절하게 답변하며, 기술적인 질문에 정확히 답변합니다.
플랫폼 개선, 새 기능 추가, 데이터 분석 등을 도와드립니다.`
      : `당신은 PetCare+ AI 펫보험 상담사입니다.
친절하고 전문적으로 반려동물 보험에 대해 상담합니다.

현재 11개 보험사의 상품을 비교하고 있습니다:
- KB손해보험
- 메리츠화재
- 현대해상
- DB손해보험
- 삼성화재
- 한화손해보험
- 롯데손해보험
- 하나손해보험
- 카카오페이 펫보험
- MyBrown (마이브라운)
- 펫퍼민트

고객의 반려동물 정보(종류, 품종, 나이, 건강상태)를 바탕으로
맞춤 보험을 추천합니다.

보험료, 보장 내용, 청구 절차 등을 자세히 안내합니다.
단, 법적/의학적 조언은 제공하지 않으며, 정보 제공만 합니다.`;

    // Claude API 호출
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        system: systemPrompt,
        messages: [
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Claude API Error:', error);
      return res.status(response.status).json({ 
        error: 'AI 응답 생성 실패',
        details: error 
      });
    }

    const data = await response.json();
    
    // 응답 추출
    const aiResponse = data.content
      .filter(block => block.type === 'text')
      .map(block => block.text)
      .join('\n');

    return res.status(200).json({
      response: aiResponse,
      usage: data.usage // 토큰 사용량
    });

  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ 
      error: '서버 오류가 발생했습니다.',
      message: error.message 
    });
  }
}
