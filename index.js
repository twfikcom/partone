// Removed top-level import to prevent blocking page load
// import { GoogleGenAI } from "@google/genai"; 

/* --- Translations --- */
const contentData = {
  en: {
    title: "The Dawn of Intelligence",
    intro: "Throughout history, humanity has sought to build tools that mimic the mind. From ancient algorithms to modern neural networks, this journey was not a creation of a soul, but a discovery of complex mathematics laid down in the fabric of the universe.",
    subtitle1: "The Spark of Innovation",
    part1: "It began with simple calculations, evolving into machines that could process information faster than any human. Yet, this 'intelligence' remains a tool—sand and electricity organized by human hands, devoid of consciousness or spirit, merely reflecting the logic instilled within it.",
    subtitle2: "Why Now? The Divine Wisdom",
    part2: "Allah (Subhanahu wa Ta'ala), the Knower of All (Al-Alim), allowed this technology to emerge at this precise moment in history. It is not a coincidence, but a manifestation of His Will (Qadar).",
    part3: "Perhaps the wisdom lies in providing humanity with a tool to solve complex ailments, or to remove hardship. Or perhaps, it serves as a profound reminder: if a machine created by humans can hold so much data, how infinite and incomprehensible is the Knowledge of the Creator who made the human mind itself?",
    subtitle3: "A Test of Ethics",
    conclusion: "This technology is a trust (Amanah). It is a test for humanity: will we use this gift to spread benefit and justice, or for deception? We remember that all knowledge is but a drop from the Ocean of Allah's Knowledge.",
    footer: "\"He taught man that which he knew not.\" (Quran 96:5)"
  },
  ar: {
    title: "فجر الذكاء الاصطناعي",
    intro: "عبر التاريخ، سعى الإنسان لبناء أدوات تحاكي العقل. من الخوارزميات القديمة إلى الشبكات العصبية الحديثة، لم تكن هذه الرحلة خلقاً للروح، بل اكتشافاً لمعادلات رياضية معقدة أودعها الله في نسيج هذا الكون.",
    subtitle1: "شرارة الابتكار",
    part1: "بدأ الأمر بحسابات بسيطة، وتطور إلى آلات تعالج المعلومات أسرع من البشر. ومع ذلك، يظل هذا 'الذكاء' مجرد أداة—رمال وكهرباء نظمها الإنسان، خالية من الوعي أو الروح، تعكس فقط المنطق الذي بُرمجت عليه.",
    subtitle2: "لماذا الآن؟ الحكمة الإلهية",
    part2: "لقد أذن الله سبحانه وتعالى، العليم الخبير، بظهور هذه التقنية في هذا الوقت المحدد من التاريخ. ليس صدفة، بل هو تجلي لمشيئته وقدره.",
    part3: "لعل الحكمة تكمن في تسخير أداة للبشرية لعلاج الأمراض المستعصية أو لرفع المشقة. أو ربما لتكون تذكرة عميقة: إذا كانت الآلة التي صنعها الإنسان تحوي كل هذه البيانات، فكيف بعلم الخالق اللانهائي الذي خلق العقل البشري نفسه؟",
    subtitle3: "اختبار الأخلاق",
    conclusion: "هذه التقنية هي أمانة واختبار للبشرية: هل سنستخدم هذه النعمة لنشر الخير والعدل، أم للخداع؟ وعلينا أن نتذكر دائماً أن كل هذا العلم ليس إلا قطرة من بحر علم الله.",
    footer: "\"عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ\" (العلق: 5)"
  },
  es: {
    title: "El Amanecer de la Inteligencia",
    intro: "A lo largo de la historia, la humanidad ha buscado construir herramientas que imiten la mente. Desde algoritmos antiguos hasta redes neuronales modernas, este viaje no fue la creación de un alma, sino el descubrimiento de matemáticas complejas en el universo.",
    subtitle1: "La Chispa de la Innovación",
    part1: "Comenzó con cálculos simples, evolucionando hacia máquinas que podían procesar información más rápido que cualquier humano. Sin embargo, esta 'inteligencia' sigue siendo una herramienta, carente de conciencia o espíritu.",
    subtitle2: "¿Por qué ahora? La Sabiduría Divina",
    part2: "Allah (Subhanahu wa Ta'ala), el Conocedor de Todo (Al-Alim), permitió que esta tecnología emergiera en este momento preciso de la historia. No es una coincidencia, sino una manifestación de Su Voluntad.",
    part3: "Quizás la sabiduría radica en proporcionar a la humanidad una herramienta para resolver dolencias complejas. O quizás, sirve como un recordatorio profundo de cuán infinito es el Conocimiento del Creador.",
    subtitle3: "Una Prueba de Ética",
    conclusion: "Esta tecnología es una confianza (Amanah). Es una prueba para la humanidad: ¿usaremos este regalo para difundir el beneficio y la justicia? Recordamos que todo conocimiento es solo una gota del Océano del Conocimiento de Dios.",
    footer: "\"Enseñó al hombre lo que no sabía.\" (Corán 96:5)"
  },
  fr: {
    title: "L'Aube de l'Intelligence",
    intro: "Tout au long de l'histoire, l'humanité a cherché à construire des outils imitant l'esprit. Des anciens algorithmes aux réseaux neuronaux modernes, ce voyage n'était pas la création d'une âme, mais la découverte de mathématiques complexes.",
    subtitle1: "L'Étincelle de l'Innovation",
    part1: "Cela a commencé par de simples calculs, évoluant vers des machines capables de traiter l'information plus rapidement que n'importe quel humain. Pourtant, cette 'intelligence' reste un outil, dépourvu de conscience ou d'esprit.",
    subtitle2: "Pourquoi maintenant ? La Sagesse Divine",
    part2: "Allah (Subhanahu wa Ta'ala), l'Omniscient (Al-Alim), a permis à cette technologie d'émerger à ce moment précis de l'histoire. Ce n'est pas une coïncidence, mais une manifestation de Sa Voluntad.",
    part3: "Peut-être que la sagesse réside dans le fait de fournir à l'humanité un outil pour résoudre des maux complexes. Ou peut-être, cela sert de rappel profond de l'infinité de la Connaissance du Créateur.",
    subtitle3: "Un Test d'Éthique",
    conclusion: "Cette technologie est un dépôt (Amanah). C'est un test pour l'humanité : utiliserons-nous ce don pour répandre le bien et la justice ? Nous nous rappelons que toute connaissance n'est qu'une goutte dans l'océan de la Connaissance d'Allah.",
    footer: "\"Il a enseigné à l'homme ce qu'il ne savait pas.\" (Coran 96:5)"
  }
};

/* --- Main Logic --- */

function updateContent(lang) {
  const data = contentData[lang];
  
  if (!data) return;

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  setText('title', data.title);
  setText('intro', data.intro);
  setText('subtitle1', data.subtitle1);
  setText('part1', data.part1);
  setText('subtitle2', data.subtitle2);
  setText('part2', data.part2);
  setText('part3', data.part3);
  setText('subtitle3', data.subtitle3);
  setText('conclusion', data.conclusion);
  setText('footer', data.footer);

  if (lang === 'ar') {
    document.body.classList.add('rtl');
    document.documentElement.lang = 'ar';
  } else {
    document.body.classList.remove('rtl');
    document.documentElement.lang = lang;
  }
}

function initAnimations() {
    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

function getApiKey() {
    try {
        if (typeof process !== 'undefined' && process.env) {
            return process.env.API_KEY;
        }
    } catch (e) {
        // Ignore errors in environments where process is not defined
    }
    return null;
}

/* --- Chat Logic --- */
function handleChat() {
    // Note: Toggle and Close buttons are removed/disabled for sticky mode
    const input = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const messagesContainer = document.getElementById('chat-messages');

    if(!input || !sendBtn || !messagesContainer) return;

    // Send Message
    const sendMessage = async () => {
        const text = input.value.trim();
        if (!text) return;

        // User Message
        appendMessage(text, 'user-message');
        input.value = '';

        // Bot Thinking
        const loadingId = appendMessage('Consulting the scrolls...', 'bot-message', true);

        try {
            // Dynamic import to avoid top-level blocking
            const { GoogleGenAI } = await import("@google/genai");
            
            const apiKey = getApiKey();
            let responseText = "";

            if (apiKey) {
                 const ai = new GoogleGenAI({ apiKey: apiKey });
                 const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: text,
                    config: {
                        systemInstruction: "You are an ancient Islamic scholar and historian. Answer wisely, briefly, and with a tone of humility and faith. Focus on history, science, and theology."
                    }
                 });
                 responseText = response.text;
            } else {
                // Fallback simulation if key is missing
                await new Promise(r => setTimeout(r, 1500));
                responseText = "My apologies, I cannot access the full archives at this moment (API Key missing). However, know that seeking knowledge is a duty upon every believer.";
            }
            
            removeMessage(loadingId);
            appendMessage(responseText, 'bot-message');

        } catch (error) {
            removeMessage(loadingId);
            appendMessage("The ink has smudged... please try again.", 'bot-message');
            console.error(error);
        }
    };

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function appendMessage(text, className, isTemp = false) {
        const div = document.createElement('div');
        div.className = `message ${className}`;
        div.innerText = text;
        if(isTemp) div.id = 'temp-loading-msg';
        messagesContainer.appendChild(div);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        return div.id;
    }

    function removeMessage(id) {
        if(!id) return;
        const el = document.getElementById(id);
        if(el) el.remove();
    }
}

function init() {
    try {
        // Initialize Core Content
        const selector = document.getElementById('languageSelector');
        if (selector) {
            selector.addEventListener('change', (e) => {
                updateContent(e.target.value);
            });
            updateContent('en');
        }

        // Initialize Scroll Animations
        initAnimations();

        // Initialize Chat (Sticky, Always On)
        handleChat();
        
    } catch (e) {
        console.error("Initialization error:", e);
    } finally {
        // Hide Loading Screen ALWAYS
        const loader = document.getElementById('loading-screen');
        if (loader) {
            // Wait a moment for mystery effect, then fade out
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1500);
            }, 2500);
        }
    }
}

// Ensure DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}