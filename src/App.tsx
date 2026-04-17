import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base flex flex-col font-serif overflow-x-hidden relative text-text-main">
      <div className="vignette"></div>
      <div className="glow-red"></div>
      <div className="relative z-10 flex flex-col w-full">
        <Navbar />
        <HeroSection />
        <WorldviewSection />
        <CharacterSection />
        <SystemSection />
        <DemoSection />
        <Footer />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-base/80 backdrop-blur-md" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-serif font-light text-[24px] tracking-[4px] uppercase text-text-main flex items-center gap-2">
          <span>환각의 방 <span className="text-[12px] opacity-50 font-mono tracking-normal ml-2">THE HALLUCINATION ROOM</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-[14px] font-serif text-text-dim">
          <a href="#world" className="hover:text-text-main transition-colors">세계관</a>
          <a href="#characters" className="hover:text-text-main transition-colors">인물 정보</a>
          <a href="#system" className="hover:text-text-main transition-colors">시스템</a>
          <a href="#demo" className="hover:text-text-main transition-colors">체험하기</a>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1629846373783-6d9b01ddf001?q=80&w=2670&auto=format&fit=crop" 
          alt="Dark eerie room" 
          className="w-full h-full object-cover opacity-[0.05] grayscale"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-accent-red font-mono text-[12px] tracking-[0.3em] uppercase mb-6"
        >
          Trapped. Obsessed. Escape.
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="font-serif text-[48px] md:text-[64px] font-light text-text-main tracking-[4px] uppercase mb-8 glitch-hover"
        >
          왜곡된 시선
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-[17px] text-text-dim mb-12 max-w-2xl mx-auto leading-[1.8] font-serif"
        >
          어느 날 눈을 떠보니 낯선 건물 안 방에 갇혀 있다. <br/>
          소리를 내선 안 된다. 그녀가 듣고 있을지도 모르니까.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <a href="#demo" className="inline-flex items-center justify-center min-w-[200px] border border-white/20 bg-transparent hover:bg-white/5 text-text-main px-8 py-4 font-serif text-[14px] transition-all duration-300">
            <span className="text-accent-red font-mono mr-2">→</span> 프롤로그 체험하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function WorldviewSection() {
  return (
    <section id="world" className="py-32 relative" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-[32px] text-text-main font-light mb-8 flex items-center gap-4 tracking-[4px] uppercase">
              침묵 속의 도주
            </h2>
            <div className="space-y-6 text-text-main leading-[1.8] text-[17px] max-w-[550px]">
              <p>
                눈을 뜬 곳은 창문이 막힌 낯선 건물의 방 안. 왜 이곳에 있는지, 어떻게 왔는지 당신의 기억은 흐릿하기만 합니다. 
              </p>
              <p>
                같은 방 구석에는 겁에 질린 또 다른 생존자, <strong className="text-accent-blue font-normal">H(차혜지)</strong>가 앉아있습니다. 그리고 문 너머의 어둠 속에서는 <strong className="text-accent-red font-normal">L(이수지)</strong>이 당신을 감시하며 배회합니다.
              </p>
              <div className="dialogue-h italic my-6">
                "이곳을 무사히 빠져나가려면 절대 소리를 내선 안 돼."
              </div>
              <p className="text-text-dim italic text-[15px]">
                당신의 목표는 단 하나. H와 함께 그녀의 시선과 소음을 피해 이 기괴한 공간을 탈출하는 것.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="scene-viewport relative aspect-square md:aspect-[4/3] overflow-hidden"
          >
            <div className="absolute inset-0 bg-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2568&auto=format&fit=crop" 
              alt="Dimly lit corridor" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-6 left-6 z-20 font-mono text-[14px] text-[#ffd700] tracking-widest">
              📍 [SYSTEM_LOG] LOCATION UNKNOWN
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CharacterSection() {
  const characters = [
    {
      id: "U",
      name: "당신 (U)",
      role: "생존자",
      desc: "희미한 기억, 엄습하는 트라우마.\n무엇이 진실이고 무엇이 환각인가?\n자신이 방에 갇힌 이유도 모른 채 깨어났습니다.",
      cardClass: "gray"
    },
    {
      id: "L",
      name: "이수지 (L)",
      role: "감시자",
      desc: "\"걱정돼서 그런 거야. 나만 있으면 돼.\"\n달콤한 목소리 뒤에 숨겨진 광적인 소유욕.\n당신의 일거수일투족을 감시합니다.",
      cardClass: "",
      image: "https://i.postimg.cc/V6RNYpwH/bolyu3.png"
    },
    {
      id: "H",
      name: "차혜지 (H)",
      role: "조력자",
      desc: "\"지금은 소리 내면 안 돼. 내 말 들어봐.\"\n침착한 판단력으로 당신의 탈출을 돕는 유일한 동료.\n건물의 구조를 일부 파악하고 있습니다.",
      cardClass: "blue",
      image: "https://i.postimg.cc/MGZ69tVF/H1.png"
    }
  ];

  return (
    <section id="characters" className="py-32 relative" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-[32px] text-center text-text-main font-light mb-16 tracking-[4px] uppercase">
          등장 인물
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {characters.map((char, index) => (
            <motion.div
              key={char.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`char-card ${char.cardClass}`}
            >
              {char.image && (
                <div className="w-full aspect-square mb-4 overflow-hidden border border-white/5 relative bg-[#0d0d0f]">
                  <div className={`absolute inset-0 mix-blend-overlay z-10 pointer-events-none ${char.cardClass === 'blue' ? 'bg-accent-blue/20' : 'bg-accent-red/20'}`}></div>
                  <img 
                    src={char.image} 
                    alt={char.name} 
                    className="w-full h-full object-cover opacity-80 grayscale-[30%] transition-transform duration-500 hover:scale-105" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="char-name">
                {char.name} <span className="char-role">{char.role}</span>
              </div>
              <div className="char-desc whitespace-pre-line">
                {char.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSection() {
  return (
    <section id="system" className="py-32 relative" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-[32px] text-center text-text-main font-light mb-16 tracking-[4px] uppercase">
          생존 시스템 UI
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <SystemFeature 
              title="🔊 소음 게이지 (Noise)"
              desc="조용히 움직이세요. 실수를 하거나 충돌해 소음이 4 이상이 되면 L의 순찰 루트가 변경되며, 6에 도달하면 즉시 발각됩니다."
            />
            <SystemFeature 
              title="💗 H 호감도 (Affection)"
              desc="H를 배려하고 협력하세요. 호감도가 높으면 비밀 루트를 알려주지만, 0이 되면 그녀는 당신을 버리고 단독 탈출을 시도합니다."
            />
            <SystemFeature 
              title="👁️ L 경계도 (Alertness)"
              desc="포식자의 거리를 나타냅니다. 5단계가 되면 그녀가 문 앞까지 다가옵니다. 그녀의 숨소리에 귀를 기울이세요."
            />
            <SystemFeature 
              title="❤️ U 체력 (HP)"
              desc="위험 구역을 지나거나 도주할 때 잃을 수 있습니다. H의 도움으로 회복 가능하지만 0이 되면 게임 오버입니다."
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="gauge-panel !flex-col !items-stretch">
              <div className="font-mono text-[12px] text-text-dim mb-4 border-b border-white/10 pb-2">Status Layout Example</div>
              <div className="gauge-item w-full">
                  <div className="gauge-label">
                      <span>🔊 소음 게이지</span>
                      <span>3 / 6</span>
                  </div>
                  <div className="bar-container">
                      <div className="bar-fill" style={{ width: '50%' }}></div>
                  </div>
              </div>

              <div className="gauge-item w-full">
                  <div className="gauge-label">
                      <span>💗 H 호감도</span>
                      <span>4 / 6</span>
                  </div>
                  <div className="bar-container">
                      <div className="bar-fill ally" style={{ width: '66%' }}></div>
                  </div>
              </div>

              <div className="gauge-item w-full">
                  <div className="gauge-label">
                      <span>👁️ L 경계도</span>
                      <span>4 / 6</span>
                  </div>
                  <div className="bar-container">
                      <div className="bar-fill danger" style={{ width: '66%' }}></div>
                  </div>
              </div>

              <div className="gauge-item w-full">
                  <div className="gauge-label">
                      <span>❤️ U 체력</span>
                      <span>4 / 5</span>
                  </div>
                  <div className="bar-container">
                      <div className="bar-fill health" style={{ width: '80%' }}></div>
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SystemFeature({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="char-card" style={{ borderLeftColor: '#555', padding: '20px' }}>
      <h3 className="text-[17px] text-text-main mb-2 font-serif">{title}</h3>
      <p className="text-text-dim leading-relaxed text-[14px] italic">{desc}</p>
    </div>
  );
}

function DemoSection() {
  const [step, setStep] = useState(0);

  const resetDemo = () => setStep(0);

  return (
    <section id="demo" className="py-32 relative" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-[32px] text-center text-text-main font-light mb-12 tracking-[4px] uppercase">
          인터랙티브 데모
        </h2>

        <div className="scene-viewport relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div 
                key="scene-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col h-full grow w-full"
              >
                <div className="content-top">
                  <span className="location-tag">📍 현재 위치: 감금 방</span>
                  
                  <div className="narrative mb-6 text-text-main">
                    당신이 눈을 뜨자 낯선 방 천장이 보입니다.<br/>
                    창문은 빈틈없이 막혀 있고, 유일한 출구인 문은 굳게 닫혀 있습니다.<br/><br/>
                    어둠에 눈이 익숙해질 무렵, 구석에서 <strong className="text-accent-blue font-normal">H</strong>가 조심스럽게 당신을 바라보고 있는 것을 발견합니다.
                  </div>

                  <div className="dialogue-h mb-6">
                    H: "...일어났어? 다행이다. 일단 조용히 해. <strong className="text-accent-red font-normal">이수지</strong>가 근처에 있을 수 있어."
                  </div>

                  <div className="text-text-dim italic text-[14px] mb-8">
                    어딘가에서 희미하게 복도를 걷는 구둣발 소리가 들립니다...
                  </div>

                  <div className="gauge-panel w-full !p-3 mb-8">
                      <div className="gauge-item">
                          <div className="gauge-label">
                              <span>🔊 소음 게이지</span>
                              <span>0 / 6</span>
                          </div>
                          <div className="bar-container">
                              <div className="bar-fill" style={{ width: '0%' }}></div>
                          </div>
                      </div>
                      <div className="gauge-item">
                          <div className="gauge-label">
                              <span>💗 H 호감도</span>
                              <span>3 / 6</span>
                          </div>
                          <div className="bar-container">
                              <div className="bar-fill ally" style={{ width: '50%' }}></div>
                          </div>
                      </div>
                      <div className="gauge-item">
                          <div className="gauge-label">
                              <span>👁️ L 경계도</span>
                              <span>2 / 6</span>
                          </div>
                          <div className="bar-container">
                              <div className="bar-fill danger" style={{ width: '33%' }}></div>
                          </div>
                      </div>
                      <div className="gauge-item">
                          <div className="gauge-label">
                              <span>❤️ U 체력</span>
                              <span>5 / 5</span>
                          </div>
                          <div className="bar-container">
                              <div className="bar-fill health" style={{ width: '100%' }}></div>
                          </div>
                      </div>
                  </div>
                </div>

                <div className="options-grid mt-auto">
                  <button onClick={() => setStep(1)} className="opt-btn"><span>→ 1.</span> H에게 상황을 물어본다</button>
                  <button onClick={() => setStep(1)} className="opt-btn"><span>→ 2.</span> 방 안을 조용히 탐색한다</button>
                  <button onClick={() => setStep(1)} className="opt-btn"><span>→ 3.</span> 문을 직접 확인해 본다</button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="scene-end"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full text-center space-y-6 m-auto py-20"
              >
                <div className="text-accent-red mb-4 text-[48px]">💀</div>
                <h3 className="text-[24px] font-serif text-text-main tracking-[4px] uppercase mb-4">데모 종료</h3>
                <p className="text-text-dim text-[17px] leading-[1.8] font-serif text-center mb-8">
                  웹사이트 소개를 위한 프롤로그 데모는 여기까지입니다.<br/>
                  저 문 밖에는 당신을 향한 지독한 시선이 기다리고 있습니다.
                </p>
                <button onClick={resetDemo} className="opt-btn !mt-8 !text-center !w-auto !inline-block px-8 py-3 mx-auto flex items-center justify-center">
                  <span className="mr-2 text-accent-red">↺</span> 초기 지점으로 돌아가기
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 text-center text-text-dim" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <p className="font-mono text-[12px] tracking-[4px] uppercase mb-2 text-accent-red">ESCAPE ROOM: THE GAZE</p>
      <p className="text-[12px] italic font-serif">이 페이지는 가상의 텍스트 기반 게임 소개를 위해 제작되었습니다.</p>
    </footer>
  );
}
