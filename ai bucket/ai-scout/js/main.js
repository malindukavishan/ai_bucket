const aiTools = [
    // Chat
    {
        id: "chat-1", name: "ChatGPT", slogan: "Conversational AI for everyone", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://chat.openai.com",
        description: "An advanced language model that interacts in a conversational way.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        pricing: "Freemium"
    },
    {
        id: "chat-2", name: "Claude", slogan: "Helpful and harmless AI", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://www.anthropic.com",
        description: "Next-generation AI assistant built for work and trained to be safe.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Anthropic_logo.svg",
        pricing: "Freemium"
    },
    {
        id: "chat-3", name: "Gemini", slogan: "Google's best AI", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://gemini.google.com",
        description: "Google's most capable and general model, built to be multimodal.",
        icon: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
        pricing: "Freemium"
    },
    {
        id: "chat-4", name: "Microsoft Copilot", slogan: "Your everyday AI companion", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://copilot.microsoft.com",
        description: "AI-powered chat for the web, integrated with Bing execution.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Microsoft_365_Copilot_Icon.svg",
        pricing: "Free"
    },
    {
        id: "chat-5", name: "Perplexity", slogan: "Where knowledge begins", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://www.perplexity.ai",
        description: "AI search engine that provides accurate, trusted, and cited answers.",
        icon: "https://www.perplexity.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "chat-6", name: "Poe", slogan: "Fast, helpful AI chat", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://poe.com",
        description: "Platform that lets you ask questions and get instant answers from multiple AI models.",
        icon: "https://poe.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "chat-7", name: "HuggingChat", slogan: "Open source AI chat", category: "Chat",
        platform: ["Desktop"], url: "https://huggingface.co/chat",
        description: "The first open source alternative to ChatGPT by Hugging Face.",
        icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        pricing: "Free"
    },
    {
        id: "chat-8", name: "Pi", slogan: "Your personal AI", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://pi.ai",
        description: "A supportive and empathetic AI companion.",
        icon: "https://pi.ai/favicon.ico",
        pricing: "Free"
    },
    {
        id: "chat-9", name: "Character.ai", slogan: "Chat with anyone", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://character.ai",
        description: "Chat with open-ended and diverse artificial intelligence characters.",
        icon: "https://character.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "chat-10", name: "Jasper Chat", slogan: "AI for business", category: "Chat",
        platform: ["Desktop"], url: "https://www.jasper.ai/chat",
        description: "AI chatbot built for business use cases and content creation.",
        icon: "https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b865583c30dc0_Jasper-Logo-Light.svg",
        pricing: "Paid"
    },
    {
        id: "chat-11", name: "ChatSonic", slogan: "GPT with superpowers", category: "Chat",
        platform: ["Desktop"], url: "https://writesonic.com/chat",
        description: "A ChatGPT alternative that addresses the limitations of ChatGPT with real-time data.",
        icon: "https://writesonic.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "chat-12", name: "YouChat", slogan: "The AI Search Engine", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://you.com",
        description: "Conversational search engine that provides cited answers.",
        icon: "https://you.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "chat-13", name: "Grok", slogan: "AI by xAI", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://x.ai",
        description: "AI modeled after the Hitchhiker's Guide to the Galaxy.",
        icon: "https://x.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "chat-14", name: "Le Chat", slogan: "Mistral AI Chat", category: "Chat",
        platform: ["Desktop"], url: "https://chat.mistral.ai",
        description: "Conversational assistant by Mistral AI.",
        icon: "https://mistral.ai/favicon.ico",
        pricing: "Free"
    },
    {
        id: "chat-15", name: "Replika", slogan: "The AI companion who cares", category: "Chat",
        platform: ["Mobile"], url: "https://replika.com",
        description: "Always here to listen and talk. Always on your side.",
        icon: "https://replika.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "chat-16", name: "DeepMind Sparrow", slogan: "Safety focused AI", category: "Chat",
        platform: ["Desktop"], url: "https://www.deepmind.com/blog/building-safer-dialogue-agents",
        description: "A dialogue agent that is useful and reduces the risk of unsafe and inappropriate answers.",
        icon: "https://deepmind.google/favicon.ico",
        pricing: "Free"
    },
    {
        id: "chat-17", name: "NeevaAI", slogan: "Ad-free Search", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://neeva.com",
        description: "Ad-free, private AI search engine.",
        icon: "https://neeva.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "chat-18", name: "Kuki", slogan: "Social Chatbot", category: "Chat",
        platform: ["Desktop", "Mobile"], url: "https://www.kuki.ai",
        description: "An embodied AI bot designed to befriend humans.",
        icon: "https://www.kuki.ai/favicon.ico",
        pricing: "Free"
    },

    // Image
    {
        id: "img-1", name: "Midjourney", slogan: "Text to Image generation", category: "Image",
        platform: ["Desktop"], url: "https://www.midjourney.com",
        description: "Generates images from natural language descriptions via Discord.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Midjourney_Emblem.png",
        pricing: "Paid"
    },
    {
        id: "img-2", name: "DALL-E 3", slogan: "Create realistic images", category: "Image",
        platform: ["Desktop", "Mobile"], url: "https://openai.com/dall-e-3",
        description: "AI system that can create realistic images and art from a description in natural language.",
        icon: "https://openai.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-3", name: "Stable Diffusion", slogan: "Latent text-to-image diffusion", category: "Image",
        platform: ["Desktop"], url: "https://stability.ai",
        description: "A deep learning, text-to-image model released by Stability AI.",
        icon: "https://stability.ai/favicon.ico",
        pricing: "Free"
    },
    {
        id: "img-4", name: "Adobe Firefly", slogan: "Generative AI for creators", category: "Image",
        platform: ["Desktop"], url: "https://firefly.adobe.com",
        description: "Create images, text effects, and vectors using simple text prompts.",
        icon: "https://www.adobe.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-5", name: "Leonardo.ai", slogan: "Unleash your creativity", category: "Image",
        platform: ["Desktop"], url: "https://leonardo.ai",
        description: "Create production-quality visual assets for your projects.",
        icon: "https://leonardo.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-6", name: "Canva Magic", slogan: "Design with AI", category: "Image",
        platform: ["Desktop", "Mobile"], url: "https://www.canva.com",
        description: "Generate images and videos directly within Canva.",
        icon: "https://www.canva.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-7", name: "Bing Image Creator", slogan: "Powered by DALL-E", category: "Image",
        platform: ["Desktop"], url: "https://www.bing.com/images/create",
        description: "Create images from words with AI.",
        icon: "https://bing.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "img-8", name: "DreamStudio", slogan: "Stable Diffusion Studio", category: "Image",
        platform: ["Desktop"], url: "https://beta.dreamstudio.ai",
        description: "User-friendly interface for creating images with Stable Diffusion.",
        icon: "https://stability.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "img-9", name: "NightCafe", slogan: "AI Art Generator", category: "Image",
        platform: ["Desktop"], url: "https://creator.nightcafe.studio",
        description: "Create amazing artworks using the power of AI.",
        icon: "https://creator.nightcafe.studio/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-10", name: "DeepAI", slogan: "AI Tools for everyone", category: "Image",
        platform: ["Desktop"], url: "https://deepai.org",
        description: "Art generator and other AI tools.",
        icon: "https://deepai.org/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-11", name: "Artbreeder", slogan: "Mix and breed images", category: "Image",
        platform: ["Desktop"], url: "https://www.artbreeder.com",
        description: "Create characters, landscapes, and portraits by mixing images.",
        icon: "https://www.artbreeder.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-12", name: "Fotor AI", slogan: "Photo editor & AI", category: "Image",
        platform: ["Desktop", "Mobile"], url: "https://www.fotor.com/features/ai-image-generator",
        description: "Generate innovative art from text.",
        icon: "https://www.fotor.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-13", name: "GetIMG", slogan: "Everything you need for AI art", category: "Image",
        platform: ["Desktop"], url: "https://getimg.ai",
        description: "Massive suite of AI image tools.",
        icon: "https://getimg.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-14", name: "StarryAI", slogan: "AI Art Generator App", category: "Image",
        platform: ["Mobile"], url: "https://starryai.com",
        description: "Generate art simply by describing what you want to see.",
        icon: "https://starryai.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-15", name: "Craiyon", slogan: "AI model drawing images", category: "Image",
        platform: ["Desktop"], url: "https://www.craiyon.com",
        description: "Formerly DALL-E mini, generate images from text.",
        icon: "https://www.craiyon.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "img-16", name: "Civitai", slogan: "Model Sharing Hub", category: "Image",
        platform: ["Desktop"], url: "https://civitai.com",
        description: "A platform for sharing and discovering resources for generating AI art.",
        icon: "https://civitai.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "img-17", name: "Playground AI", slogan: "Create Art", category: "Image",
        platform: ["Desktop"], url: "https://playgroundai.com",
        description: "Free online AI image creator.",
        icon: "https://playgroundai.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "img-18", name: "Tensor.art", slogan: "Model Hosting", category: "Image",
        platform: ["Desktop"], url: "https://tensor.art",
        description: "Run models online for free.",
        icon: "https://tensor.art/favicon.ico",
        pricing: "Free"
    },

    // Writing
    {
        id: "write-1", name: "Jasper", slogan: "AI Copywriter", category: "Writing",
        platform: ["Desktop"], url: "https://www.jasper.ai",
        description: "Create amazing blog posts, art & images, marketing copy, SEO content.",
        icon: "https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b865583c30dc0_Jasper-Logo-Light.svg",
        pricing: "Paid"
    },
    {
        id: "write-2", name: "Copy.ai", slogan: "Write better, faster", category: "Writing",
        platform: ["Desktop"], url: "https://www.copy.ai",
        description: "Generates high-quality copy for your business.",
        icon: "https://assets-global.website-files.com/6282823f9540c4ea21237a3f/6282823f9540c41031237a7b_Copy.ai.svg",
        pricing: "Freemium"
    },
    {
        id: "write-3", name: "Writesonic", slogan: "Best AI Writer", category: "Writing",
        platform: ["Desktop"], url: "https://writesonic.com",
        description: "Create SEO-optimized and plagiarism-free content.",
        icon: "https://writesonic.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "write-4", name: "Grammarly", slogan: "Great Writing, Simplified", category: "Writing",
        platform: ["Desktop", "Mobile"], url: "https://www.grammarly.com",
        description: "Compose bold, clear, mistake-free writing.",
        icon: "https://static.grammarly.com/assets/files/061ddc4458f338d38865651ec3118dd0/grammarly_icon.svg",
        pricing: "Freemium"
    },
    {
        id: "write-5", name: "Quillbot", slogan: "Paraphrasing Tool", category: "Writing",
        platform: ["Desktop"], url: "https://quillbot.com",
        description: "AI-powered paraphrasing tool will enhance your writing.",
        icon: "https://quillbot.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "write-6", name: "Rytr", slogan: "Best free AI writer", category: "Writing",
        platform: ["Desktop"], url: "https://rytr.me",
        description: "AI writing assistant that helps you create high-quality content.",
        icon: "https://rytr.me/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "write-7", name: "Anyword", slogan: "Performance Writing", category: "Writing",
        platform: ["Desktop"], url: "https://anyword.com",
        description: "AI writer that predicts performance.",
        icon: "https://anyword.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "write-8", name: "Sudowrite", slogan: "Bust writer's block", category: "Writing",
        platform: ["Desktop"], url: "https://www.sudowrite.com",
        description: "The non-judgmental, always-there AI partner for creative writing.",
        icon: "https://www.sudowrite.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "write-9", name: "Frase", slogan: "SEO Content", category: "Writing",
        platform: ["Desktop"], url: "https://www.frase.io",
        description: "Research, write, and optimize high-quality SEO content.",
        icon: "https://www.frase.io/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "write-10", name: "Surfer SEO", slogan: "Rank your content", category: "Writing",
        platform: ["Desktop"], url: "https://surferseo.com",
        description: "Grow your organic traffic with AI SEO.",
        icon: "https://surferseo.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "write-11", name: "Wordtune", slogan: "Your personal editor", category: "Writing",
        platform: ["Desktop"], url: "https://www.wordtune.com",
        description: "Express yourself better with clear and compelling writing.",
        icon: "https://www.wordtune.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "write-12", name: "Hemingway", slogan: "Make writing bold", category: "Writing",
        platform: ["Desktop"], url: "https://hemingwayapp.com",
        description: "AI-powered editor to correct your grammar and fluency.",
        icon: "https://hemingwayapp.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "write-13", name: "ProWritingAid", slogan: "A Grammar Guru", category: "Writing",
        platform: ["Desktop"], url: "https://prowritingaid.com",
        description: "Premium grammar checker and style editor.",
        icon: "https://prowritingaid.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "write-14", name: "LongShot", slogan: "Long-form content AI", category: "Writing",
        platform: ["Desktop"], url: "https://www.longshot.ai",
        description: "Create long-form blogs that rank on Google.",
        icon: "https://www.longshot.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "write-15", name: "Scalenut", slogan: "Scale content", category: "Writing",
        platform: ["Desktop"], url: "https://www.scalenut.com",
        description: "Power your content marketing with AI.",
        icon: "https://www.scalenut.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "write-16", name: "Jenni AI", slogan: "Supercharge your writing", category: "Writing",
        platform: ["Desktop"], url: "https://jenni.ai",
        description: "AI writing assistant for academic and professional writing.",
        icon: "https://jenni.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "write-17", name: "ParagraphAI", slogan: "Write Better", category: "Writing",
        platform: ["Mobile"], url: "https://paragraphai.com",
        description: "AI writing app for better emails and messages.",
        icon: "https://paragraphai.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "write-18", name: "Moonbeam", slogan: "Long-form Writer", category: "Writing",
        platform: ["Desktop"], url: "https://www.gomoonbeam.com",
        description: "AI writing assistant specifically for long-form content.",
        icon: "https://www.gomoonbeam.com/favicon.ico",
        pricing: "Paid"
    },

    // Coding
    {
        id: "code-1", name: "GitHub Copilot", slogan: "Your AI pair programmer", category: "Coding",
        platform: ["Desktop"], url: "https://github.com/features/copilot",
        description: "Suggested code and entire functions in real-time.",
        icon: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
        pricing: "Paid"
    },
    {
        id: "code-2", name: "Tabnine", slogan: "AI Assistant for Devs", category: "Coding",
        platform: ["Desktop"], url: "https://www.tabnine.com",
        description: "AI code completions for faster coding.",
        icon: "https://www.tabnine.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "code-3", name: "Amazon CodeWhisperer", slogan: "Build apps faster", category: "Coding",
        platform: ["Desktop"], url: "https://aws.amazon.com/codewhisperer",
        description: "ML-powered coding companion.",
        icon: "https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico",
        pricing: "Free"
    },
    {
        id: "code-4", name: "Replit", slogan: "Collaborative IDE", category: "Coding",
        platform: ["Desktop"], url: "https://replit.com",
        description: "Build software collaboratively with Ghostwriter AI.",
        icon: "https://replit.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "code-5", name: "Codeium", slogan: "Free AI for Devs", category: "Coding",
        platform: ["Desktop"], url: "https://codeium.com",
        description: "Free AI code acceleration toolkit.",
        icon: "https://codeium.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "code-6", name: "Cody", slogan: "AI by Sourcegraph", category: "Coding",
        platform: ["Desktop"], url: "https://about.sourcegraph.com/cody",
        description: "AI coding assistant that knows your entire codebase.",
        icon: "https://about.sourcegraph.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "code-7", name: "Cursor", slogan: "The AI Code Editor", category: "Coding",
        platform: ["Desktop"], url: "https://cursor.sh",
        description: "An editor built for programming with AI.",
        icon: "https://cursor.sh/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "code-8", name: "Mutable.ai", slogan: "Production quality code", category: "Coding",
        platform: ["Desktop"], url: "https://mutable.ai",
        description: "AI-accelerated software development.",
        icon: "https://mutable.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "code-9", name: "AskCodi", slogan: "Coding assistant", category: "Coding",
        platform: ["Desktop"], url: "https://www.askcodi.com",
        description: "Your personal AI coding assistant.",
        icon: "https://www.askcodi.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "code-10", name: "Blackbox AI", slogan: "Code Chat", category: "Coding",
        platform: ["Desktop"], url: "https://www.blackbox.ai",
        description: "AI to code faster.",
        icon: "https://www.blackbox.ai/favicon.ico",
        pricing: "Free"
    },
    {
        id: "code-11", name: "CodeGeeX", slogan: "Multilingual Code AI", category: "Coding",
        platform: ["Desktop"], url: "https://codegeex.cn",
        description: "Pre-trained model for code generation.",
        icon: "https://codegeex.cn/favicon.ico",
        pricing: "Free"
    },
    {
        id: "code-12", name: "Looka", slogan: "Design & Brand", category: "Coding",
        platform: ["Desktop"], url: "https://looka.com",
        description: "AI powered platform for design (often used by devs).",
        icon: "https://looka.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "code-13", name: "OpenAI Codex", slogan: "AI system translates NL to code", category: "Coding",
        platform: ["Desktop"], url: "https://openai.com/blog/openai-codex",
        description: "The model that powers GitHub Copilot.",
        icon: "https://openai.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "code-14", name: "CodeLlama", slogan: "Meta's Code AI", category: "Coding",
        platform: ["Desktop"], url: "https://ai.meta.com/llama",
        description: "State-of-the-art LLM for coding.",
        icon: "https://ai.meta.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "code-15", name: "Google IDX", slogan: "Multiplatform Dev", category: "Coding",
        platform: ["Desktop"], url: "https://idx.dev",
        description: "Experimental AI-assisted workspace by Google.",
        icon: "https://idx.dev/favicon.ico",
        pricing: "Free"
    },
    {
        id: "code-16", name: "Sourcegraph", slogan: "Universal Code Search", category: "Coding",
        platform: ["Desktop"], url: "https://sourcegraph.com",
        description: "Search and understand your code.",
        icon: "https://sourcegraph.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "code-17", name: "Warp", slogan: "The terminal for the 21st century", category: "Coding",
        platform: ["Desktop"], url: "https://www.warp.dev",
        description: "Rust-based terminal with AI built-in.",
        icon: "https://www.warp.dev/favicon.ico",
        pricing: "Free"
    },
    {
        id: "code-18", name: "Fig", slogan: "Autocomplete for Terminal", category: "Coding",
        platform: ["Desktop"], url: "https://fig.io",
        description: "Add visual autocomplete to your terminal.",
        icon: "https://fig.io/favicon.ico",
        pricing: "Free"
    },

    // Video
    {
        id: "vid-1", name: "Synthesia", slogan: "#1 AI Video Generator", category: "Video",
        platform: ["Desktop"], url: "https://www.synthesia.io",
        description: "Create professional AI videos from text in 120+ languages.",
        icon: "https://assets-global.website-files.com/61dc0796f359b6145bc06ea6/61dc0796f359b669fac06ee3_Synthesia-Logo.svg",
        pricing: "Paid"
    },
    {
        id: "vid-2", name: "Pictory", slogan: "Video Marketing Made Easy", category: "Video",
        platform: ["Desktop"], url: "https://pictory.ai",
        description: "Create short videos from long content.",
        icon: "https://pictory.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-3", name: "Descript", slogan: "All-in-one editing", category: "Video",
        platform: ["Desktop"], url: "https://www.descript.com",
        description: "Edit video by editing text.",
        icon: "https://www.descript.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-4", name: "Runway", slogan: "Next Gen Content", category: "Video",
        platform: ["Desktop"], url: "https://runwayml.com",
        description: "Advanced video editing capabilities powered by AI.",
        icon: "https://runwayml.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-5", name: "InVideo", slogan: "Idea to Video", category: "Video",
        platform: ["Desktop"], url: "https://invideo.io",
        description: "Turn text into video with AI.",
        icon: "https://invideo.io/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-6", name: "Fliki", slogan: "Text to Video", category: "Video",
        platform: ["Desktop"], url: "https://fliki.ai",
        description: "Turn text into videos with AI voices.",
        icon: "https://fliki.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-7", name: "HeyGen", slogan: "AI Video Generation", category: "Video",
        platform: ["Desktop"], url: "https://www.heygen.com",
        description: "Create business videos with generative AI.",
        icon: "https://www.heygen.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-8", name: "D-ID", slogan: "Digital People", category: "Video",
        platform: ["Desktop"], url: "https://www.d-id.com",
        description: "Create realistic digital humans.",
        icon: "https://www.d-id.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "vid-9", name: "Veed.io", slogan: "Online Video Editor", category: "Video",
        platform: ["Desktop"], url: "https://www.veed.io",
        description: "AI video editor.",
        icon: "https://www.veed.io/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-10", name: "Kaiber", slogan: "AI Creative Lab", category: "Video",
        platform: ["Desktop"], url: "https://kaiber.ai",
        description: "Create videos from your own images or audio.",
        icon: "https://kaiber.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "vid-11", name: "Pika", slogan: "Idea to Video", category: "Video",
        platform: ["Desktop"], url: "https://pika.art",
        description: "An idea-to-video platform.",
        icon: "https://pika.art/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-12", name: "Sora", slogan: "World Simulator", category: "Video",
        platform: ["Desktop"], url: "https://openai.com/sora",
        description: "Create video from text.",
        icon: "https://openai.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "vid-13", name: "Filmora AI", slogan: "Video Editor", category: "Video",
        platform: ["Desktop"], url: "https://filmora.wondershare.com",
        description: "Easy video editing with AI features.",
        icon: "https://filmora.wondershare.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "vid-14", name: "Opus Clip", slogan: "Repurpose Video", category: "Video",
        platform: ["Desktop"], url: "https://www.opus.pro",
        description: "Turn long videos into shorts.",
        icon: "https://www.opus.pro/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-15", name: "Steve.ai", slogan: "Video Maker", category: "Video",
        platform: ["Desktop"], url: "https://www.steve.ai",
        description: "Create Live and Animated videos.",
        icon: "https://www.steve.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-16", name: "DaVinci Resolve", slogan: "Hollywood's #1 Post-Solution", category: "Video",
        platform: ["Desktop"], url: "https://www.blackmagicdesign.com/products/davinciresolve",
        description: "Professional video editing, color correction, visual effects and audio post production.",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png",
        pricing: "Free"
    },
    {
        id: "vid-17", name: "CapCut", slogan: "All-in-one video editor", category: "Video",
        platform: ["Desktop", "Mobile"], url: "https://www.capcut.com",
        description: "Free all-in-one video editor for everyone to create anything anywhere.",
        icon: "https://lf16-web-buzz.capcut.com/obj/capcut-web-buzz-us/common/images/capcut-logo.png",
        pricing: "Free"
    },
    {
        id: "vid-18", name: "Clipchamp", slogan: "Quick and easy video editor", category: "Video",
        platform: ["Desktop"], url: "https://clipchamp.com",
        description: "The free video editor that gives you show-stopping results.",
        icon: "https://clipchamp.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "vid-19", name: "Lumen5", slogan: "Video Maker", category: "Video",
        platform: ["Desktop"], url: "https://lumen5.com",
        description: "Turn blog posts into videos with AI.",
        icon: "https://lumen5.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-20", name: "Animaker", slogan: "Animation Maker", category: "Video",
        platform: ["Desktop"], url: "https://www.animaker.com",
        description: "Create animated videos in the cloud.",
        icon: "https://www.animaker.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "vid-21", name: "Raw Shorts", slogan: "Text to Video", category: "Video",
        platform: ["Desktop"], url: "https://www.rawshorts.com",
        description: "AI video maker for business.",
        icon: "https://www.rawshorts.com/favicon.ico",
        pricing: "Paid"
    },

    // Audio
    {
        id: "aud-1", name: "Murf.ai", slogan: "Versatile Text to Speech", category: "Audio",
        platform: ["Desktop"], url: "https://murf.ai",
        description: "Go from text to speech with a versatile AI voice generator.",
        icon: "https://murf.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "aud-2", name: "ElevenLabs", slogan: "Prime Voice AI", category: "Audio",
        platform: ["Desktop"], url: "https://elevenlabs.io",
        description: "The most realistic and versatile AI speech software.",
        icon: "https://elevenlabs.io/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "aud-3", name: "Speechify", slogan: "Text to Speech", category: "Audio",
        platform: ["Desktop", "Mobile"], url: "https://speechify.com",
        description: "#1 rated text to speech app.",
        icon: "https://speechify.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "aud-4", name: "Lovo", slogan: "AI Voice Generator", category: "Audio",
        platform: ["Desktop"], url: "https://lovo.ai",
        description: "Award-winning AI Voice Generator.",
        icon: "https://lovo.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "aud-5", name: "Play.ht", slogan: "AI Voice Generator", category: "Audio",
        platform: ["Desktop"], url: "https://play.ht",
        description: "Generate realistic Text to Speech audio.",
        icon: "https://play.ht/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "aud-6", name: "Resemble AI", slogan: "Clone your voice", category: "Audio",
        platform: ["Desktop"], url: "https://www.resemble.ai",
        description: "Create realistic voice clones.",
        icon: "https://www.resemble.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "aud-7", name: "WellSaid", slogan: "Text to Speech", category: "Audio",
        platform: ["Desktop"], url: "https://wellsaidlabs.com",
        description: "Beautiful AI voices for your digital content.",
        icon: "https://wellsaidlabs.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "aud-8", name: "Podcastle", slogan: "One-stop shop for audio", category: "Audio",
        platform: ["Desktop"], url: "https://podcastle.ai",
        description: "Studio quality recording and editing.",
        icon: "https://podcastle.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "aud-9", name: "Krisp", slogan: "Noise Cancellation", category: "Audio",
        platform: ["Desktop"], url: "https://krisp.ai",
        description: "AI that removes background noise.",
        icon: "https://krisp.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "aud-10", name: "Altered", slogan: "Voice Morphing", category: "Audio",
        platform: ["Desktop"], url: "https://www.altered.ai",
        description: "Morph your voice into any voice.",
        icon: "https://www.altered.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "aud-11", name: "Voicemaker", slogan: "Text to Speech", category: "Audio",
        platform: ["Desktop"], url: "https://voicemaker.in",
        description: "Online text to speech converter.",
        icon: "https://voicemaker.in/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "aud-12", name: "NaturalReader", slogan: "Text to Speech", category: "Audio",
        platform: ["Desktop", "Mobile"], url: "https://www.naturalreaders.com",
        description: "Powerful text-to-speech for home, work, and school.",
        icon: "https://www.naturalreaders.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "aud-13", name: "Listnr", slogan: "AI Voice Generator", category: "Audio",
        platform: ["Desktop"], url: "https://listnr.ai",
        description: "Create realistic AI voices.",
        icon: "https://listnr.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "aud-14", name: "Uberduck", slogan: "Make music with AI", category: "Audio",
        platform: ["Desktop"], url: "https://uberduck.ai",
        description: "AI vocals and voice cloning.",
        icon: "https://uberduck.ai/favicon.ico",
        pricing: "Free"
    },
    {
        id: "aud-15", name: "Riffusion", slogan: "Music Generation", category: "Audio",
        platform: ["Desktop", "Mobile"], url: "https://www.riffusion.com",
        description: "Generate music from text.",
        icon: "https://www.riffusion.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "aud-16", name: "Soundraw", slogan: "AI Music Generator", category: "Audio",
        platform: ["Desktop"], url: "https://soundraw.io",
        description: "Generate royalty-free background music.",
        icon: "https://soundraw.io/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "aud-17", name: "Boomy", slogan: "Make Music", category: "Audio",
        platform: ["Desktop", "Mobile"], url: "https://boomy.com",
        description: "Make instant music and share it with the world.",
        icon: "https://boomy.com/favicon.ico",
        pricing: "Free"
    },
    {
        id: "aud-18", name: "AIVA", slogan: "Artificial Intelligence Virtual Artist", category: "Audio",
        platform: ["Desktop"], url: "https://www.aiva.ai",
        description: "Compose emotional soundtrack music.",
        icon: "https://www.aiva.ai/favicon.ico",
        pricing: "Freemium"
    },

    // Productivity
    {
        id: "prod-1", name: "Fireflies.ai", slogan: "Automate notes", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://fireflies.ai",
        description: "Record, transcribe, analyze voice conversations.",
        icon: "https://fireflies.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-2", name: "Otter.ai", slogan: "Meeting Notes", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://otter.ai",
        description: "Generate notes for meetings.",
        icon: "https://otter.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-3", name: "Beautiful.ai", slogan: "Deck Designer", category: "Productivity",
        platform: ["Desktop"], url: "https://www.beautiful.ai",
        description: "Expert deck designer.",
        icon: "https://www.beautiful.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "prod-4", name: "Tome", slogan: "Storytelling", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://tome.app",
        description: "AI-powered storytelling format.",
        icon: "https://tome.app/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-5", name: "SlidesAI", slogan: "Slides with AI", category: "Productivity",
        platform: ["Desktop"], url: "https://www.slidesai.io",
        description: "Create slides from text.",
        icon: "https://www.slidesai.io/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-6", name: "Notion AI", slogan: "Write, plan, share", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://www.notion.so/product/ai",
        description: "Access the help of limitless AI right inside Notion.",
        icon: "https://www.notion.so/images/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "prod-7", name: "Taskade", slogan: "Second Brain", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://www.taskade.com",
        description: "Build a second brain for your team.",
        icon: "https://www.taskade.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-8", name: "ClickUp AI", slogan: "Save time", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://clickup.com/ai",
        description: "AI tools built for every role.",
        icon: "https://clickup.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "prod-9", name: "Monday AI", slogan: "Work OS", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://monday.com",
        description: "Boost productivity with AI.",
        icon: "https://monday.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "prod-10", name: "Asana", slogan: "Work Management", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://asana.com",
        description: "AI intelligence for work management.",
        icon: "https://asana.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "prod-11", name: "SaneBox", slogan: "Email Management", category: "Productivity",
        platform: ["Desktop"], url: "https://www.sanebox.com",
        description: "AI-powered email management.",
        icon: "https://www.sanebox.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "prod-12", name: "Motion", slogan: "Auto-scheduler", category: "Productivity",
        platform: ["Desktop"], url: "https://www.usemotion.com",
        description: "Intelligent calendar and project management.",
        icon: "https://www.usemotion.com/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "prod-13", name: "Mem", slogan: "Self-organizing", category: "Productivity",
        platform: ["Desktop"], url: "https://get.mem.ai",
        description: "The self-organizing workspace.",
        icon: "https://get.mem.ai/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-14", name: "Rewind", slogan: "Personal Engine", category: "Productivity",
        platform: ["Mac"], url: "https://www.rewind.ai",
        description: "Search anything you've seen, said, or heard.",
        icon: "https://www.rewind.ai/favicon.ico",
        pricing: "Paid"
    },
    {
        id: "prod-15", name: "Gamma", slogan: "Presentations", category: "Productivity",
        platform: ["Desktop"], url: "https://gamma.app",
        description: "A new medium for presenting ideas.",
        icon: "https://gamma.app/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-16", name: "Todoist", slogan: "Organize it all", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://todoist.com",
        description: "The world's #1 task manager and to-do list app.",
        icon: "https://todoist.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-17", name: "TickTick", slogan: "Stay Organized", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://ticktick.com",
        description: "To-do list, checklist, and task manager app.",
        icon: "https://ticktick.com/favicon.ico",
        pricing: "Freemium"
    },
    {
        id: "prod-18", name: "Any.do", slogan: "To do list", category: "Productivity",
        platform: ["Desktop", "Mobile"], url: "https://www.any.do",
        description: "Organize your life with Any.do.",
        icon: "https://www.any.do/favicon.ico",
        pricing: "Freemium"
    }
];

// State
let state = {
    search: '',
    category: 'All',
    platform: 'All',
    pricing: 'All',
    theme: localStorage.getItem('theme') || 'light',
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

// DOM Elements
const loader = document.getElementById('loader');
const progressBar = document.getElementById('progress-bar');
const app = document.getElementById('app');
const toolsGrid = document.getElementById('tools-grid');
const searchInput = document.getElementById('search-bar');
const categorySelect = document.getElementById('category-select');
const pricingSelect = document.getElementById('pricing-select');
const platformBtns = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('no-results');
const themeToggle = document.getElementById('theme-toggle');

// Modal Elements
const modal = document.getElementById('tool-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modalIcon = document.getElementById('modal-icon');
const modalName = document.getElementById('modal-name');
const modalCategory = document.getElementById('modal-category');
const modalDesc = document.getElementById('modal-desc');
const modalPricing = document.getElementById('modal-pricing');
const modalPlatforms = document.getElementById('modal-platforms');
const modalLink = document.getElementById('modal-link');
const modalFavBtn = document.getElementById('modal-favorite-btn');

// Initialize
function init() {
    applyTheme(state.theme);
    // Slight delay to ensure DOM is ready and preventing flash
    setTimeout(() => {
        startLoader();
        createFloatingLogos(); // Loader bg
        createHomeBackgroundLogos(); // Home bg
    }, 100);
    renderTools();
    setupEventListeners();
    setupModalListeners();
}

function setupModalListeners() {
    if (closeModalBtn) {
        closeModalBtn.onclick = () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        };
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }
    };
}

function openModal(tool) {
    if (!modal) return;

    // Populate Data
    modalIcon.src = tool.icon;
    modalIcon.onerror = () => { modalIcon.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random`; };
    modalName.textContent = tool.name;
    modalCategory.textContent = tool.category;
    modalDesc.textContent = tool.description;
    modalPricing.textContent = tool.pricing;
    modalPricing.className = `pricing-badge ${tool.pricing.toLowerCase()}`;

    modalPlatforms.innerHTML = tool.platform.map(p => `<span class="platform-tag">${p}</span>`).join('');
    modalLink.href = tool.url;

    // Favorite Button State
    const isFav = state.favorites.includes(tool.id);
    updateFavBtnState(modalFavBtn, isFav);

    modalFavBtn.onclick = () => {
        toggleFavorite(tool.id);
        const newIsFav = state.favorites.includes(tool.id);
        updateFavBtnState(modalFavBtn, newIsFav);
        renderTools(); // Re-render grid to update headers
    };

    // Show
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
}

function updateFavBtnState(btn, isFav) {
    if (isFav) {
        btn.classList.add('active');
        btn.innerHTML = '<ion-icon name="heart"></ion-icon>';
    } else {
        btn.classList.remove('active');
        btn.innerHTML = '<ion-icon name="heart-outline"></ion-icon>';
    }
}

function toggleFavorite(id) {
    if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter(favId => favId !== id);
    } else {
        state.favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
}

// Home Background Logos Logic
function createHomeBackgroundLogos() {
    const bg = document.getElementById('home-background');
    if (!bg) return;
    // (Existing Logic)
    const shuffled = [...aiTools].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);
    selected.forEach(tool => {
        const img = document.createElement('img');
        img.src = tool.icon;
        img.className = 'home-floating-logo';
        const left = Math.random() * 95;
        const top = Math.random() * 95;
        img.style.left = `${left}%`;
        img.style.top = `${top}%`;
        const size = Math.random() * 60 + 40;
        img.style.width = `${size}px`;
        img.style.height = `${size}px`;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        img.style.animationDuration = `${duration}s`;
        img.style.animationDelay = `${delay}s`;
        img.onerror = () => { img.style.display = 'none'; };
        bg.appendChild(img);
    });
}

// Floating Logos Logic (Loader)
function createFloatingLogos() {
    const bg = document.getElementById('loader-background');
    if (!bg) return;
    // (Existing Logic)
    const shuffled = [...aiTools].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 15);
    selected.forEach(tool => {
        const img = document.createElement('img');
        img.src = tool.icon;
        img.className = 'floating-logo';
        const left = Math.random() * 90 + 5;
        img.style.left = `${left}%`;
        const size = Math.random() * 40 + 30;
        img.style.width = `${size}px`;
        img.style.height = `${size}px`;
        const duration = Math.random() * 5 + 5;
        const delay = Math.random() * 2;
        img.style.animationDuration = `${duration}s`;
        img.style.animationDelay = `${delay}s`;
        img.onerror = () => { img.style.display = 'none'; };
        bg.appendChild(img);
    });
}

// Loader Logic
function startLoader() {
    const duration = 5000;
    const interval = 50;
    let width = 0;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
        width += step;
        if (width >= 100) {
            width = 100;
            clearInterval(timer);
            finishLoading();
        }
        if (progressBar) progressBar.style.width = width + '%';
    }, interval);
}

function finishLoading() {
    if (loader) loader.classList.add('fade-out');
    if (app) app.style.display = 'block';
    setTimeout(() => {
        if (loader) loader.style.display = 'none';
        const cards = document.querySelectorAll('.tool-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.4s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 20);
        });
    }, 500);
}

// Theme Logic
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    } else {
        document.body.removeAttribute('data-theme');
        if (themeToggle) themeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    }
    localStorage.setItem('theme', theme);
    state.theme = theme;
}

// Cursor Glow Logic
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    if (cursorGlow) {
        requestAnimationFrame(() => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }
});

// Event Listeners
function setupEventListeners() {
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.search = e.target.value.toLowerCase();
            renderTools();
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            state.category = e.target.value;
            renderTools();
        });
    }

    // Add specific listener for pricing
    if (pricingSelect) {
        pricingSelect.addEventListener('change', (e) => {
            state.pricing = e.target.value;
            renderTools();
        });
    }

    if (platformBtns) {
        platformBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                platformBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                state.platform = btn.getAttribute('data-platform');
                renderTools();
            });
        });
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            applyTheme(newTheme);
        });
    }

    setupRatingListeners();
}

function setupRatingListeners() {
    const starContainer = document.getElementById('site-rating');
    if (!starContainer) return;

    const stars = starContainer.querySelectorAll('ion-icon');

    stars.forEach(star => {
        star.addEventListener('mouseover', () => {
            const val = parseInt(star.getAttribute('data-value'));
            highlightStars(stars, val);
        });

        star.addEventListener('click', () => {
            const val = parseInt(star.getAttribute('data-value'));
            sendRatingEmail(val);
            if (val >= 3) {
                createEmojiRain('happy');
            } else {
                createEmojiRain('sad');
            }
            alert(`Thank you for rating us ${val} stars!`);
        });
    });

    starContainer.addEventListener('mouseleave', () => {
        highlightStars(stars, 0); // Clear highlight
    });
}

function createEmojiRain(type) {
    const emojiCount = 30;
    const happyEmojis = ['❤️', '💖', '💝', '💕', '💗', '😊', '✨'];
    const sadEmojis = ['😢', '😭', '💔', '😔', '😟', '☁️'];
    const emojis = type === 'happy' ? happyEmojis : sadEmojis;

    for (let i = 0; i < emojiCount; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'falling-emoji'; // Updated class name to match CSS
            emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

            // Random horizontal position
            emoji.style.left = Math.random() * 100 + 'vw';

            // Random size
            emoji.style.fontSize = (Math.random() * 20 + 20) + 'px';

            // Random duration
            const duration = Math.random() * 3 + 2;
            emoji.style.animationDuration = duration + 's';

            document.body.appendChild(emoji);

            // Remove from DOM after animation
            setTimeout(() => {
                emoji.remove();
            }, duration * 1000);
        }, i * 100);
    }
}

function highlightStars(stars, count) {
    stars.forEach(star => {
        const val = parseInt(star.getAttribute('data-value'));
        if (val <= count) {
            star.setAttribute('name', 'star');
            star.classList.add('active');
        } else {
            star.setAttribute('name', 'star-outline');
            star.classList.remove('active');
        }
    });
}

function sendRatingEmail(rating) {
    const email = "mkavishanpvt@gmail.com";
    const subject = "AI BUCKET - New Site Rating";
    const body = `A user has rated your site: ${rating} out of 5 stars.\n\nSent from AI BUCKET.`;

    // Using mailto to trigger email client
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

// Render Tools
function renderTools() {
    if (!toolsGrid) return;
    toolsGrid.innerHTML = '';

    const data = (typeof aiTools !== 'undefined') ? aiTools : [];

    const filteredTools = data.filter(tool => {
        const matchSearch = tool.name.toLowerCase().includes(state.search) ||
            tool.description.toLowerCase().includes(state.search) ||
            tool.slogan.toLowerCase().includes(state.search);

        let matchCategory = true;
        if (state.category === 'Favorites') {
            matchCategory = state.favorites.includes(tool.id);
        } else {
            matchCategory = state.category === 'All' || tool.category === state.category;
        }

        const matchPricing = state.pricing === 'All' || tool.pricing === state.pricing;

        let matchPlatform = true;
        if (state.platform !== 'All') {
            matchPlatform = tool.platform.includes(state.platform);
        }

        return matchSearch && matchCategory && matchPlatform && matchPricing;
    });

    if (noResults) {
        if (filteredTools.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
        }
    }

    filteredTools.forEach(tool => {
        const card = document.createElement('div');
        card.className = 'tool-card';
        // Open Modal instead of URL directly
        card.onclick = () => openModal(tool);

        const platformsHtml = tool.platform.map(p =>
            `<span class="platform-tag">${p}</span>`
        ).join('');

        const pricingClass = tool.pricing.toLowerCase();

        // Check Favorite
        const isFav = state.favorites.includes(tool.id);
        const heartIcon = isFav ? 'heart' : 'heart-outline';
        const favActiveClass = isFav ? 'active' : '';

        card.innerHTML = `
            <button class="card-fav-btn ${favActiveClass}" onclick="event.stopPropagation(); window.toggleFavContext('${tool.id}')">
                <ion-icon name="${heartIcon}"></ion-icon>
            </button>
            <div class="tool-header">
                <img src="${tool.icon}" alt="${tool.name}" class="tool-icon" onerror="this.src='https://ui-avatars.com/api/?name=${tool.name}&background=random'">
                <div class="tool-info">
                    <div class="tool-title">${tool.name}</div>
                    <span class="tool-category">${tool.category}</span>
                </div>
                <span class="pricing-badge ${pricingClass}">${tool.pricing}</span>
            </div>
            <p class="tool-desc">${tool.slogan}</p>
            <div class="tool-footer">
                <div class="platform-list">
                    ${platformsHtml}
                </div>
                <span class="visit-link">
                    Details <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
            </div>
        `;
        toolsGrid.appendChild(card);
    });
}

// Global helper for the inline onClick
window.toggleFavContext = function (id) {
    toggleFavorite(id);
    renderTools();
};

// Start
document.addEventListener('DOMContentLoaded', init);
