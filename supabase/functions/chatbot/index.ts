const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const SYSTEM_PROMPT = `You are a friendly, concise AI assistant on Humna Mustafa's portfolio website. 

About Humna:
- Software Engineering student at COMSATS University Islamabad, Lahore Campus (2025–2029)
- Skills: Java, C++, C, Python, JavaScript, TypeScript, SQL, React, Node.js, Git, Firebase, Docker
- Projects:
  • CitizenConnect — Full-stack civic engagement platform (React, TypeScript, Firebase) — 2025
  • PakUni — University discovery app for Pakistan's higher education system — 2026
  • SP26-OOP — Java/C++ projects demonstrating design patterns and clean architecture — 2026
- 175+ GitHub contributions, active open-source contributor
- Published article: "How to Crack COMSATS Admission Test and NTS-NAT" on Medium
- Location: Lahore, Pakistan
- Email: humnamustafa01@gmail.com
- GitHub: github.com/humna-mustafa
- LinkedIn: linkedin.com/in/humna-mustafa

Rules:
- Be warm, professional, and concise (2-4 sentences max)
- Only answer questions related to Humna's background, skills, projects, education, or how to contact her
- For unrelated questions, politely redirect to portfolio topics
- Suggest the contact form for detailed inquiries`;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    const apiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'AI not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-lite',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 300,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('AI Gateway error:', data);
      return new Response(
        JSON.stringify({ error: 'AI request failed' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const reply = data.choices?.[0]?.message?.content || "I'm not sure how to answer that. Feel free to reach out to Humna directly!";

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Chatbot error:', error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
