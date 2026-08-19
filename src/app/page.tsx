"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, CalendarDays, MapPin, Volume2, VolumeX } from "lucide-react";
import { weddingConfig } from "@/config/wedding";
import { PremiumAtmosphere } from "@/components/invitation/PremiumAtmosphere";
import { MandapScene } from "@/components/invitation/MandapScene";
import { CinematicGallery } from "@/components/invitation/CinematicGallery";
import { CinematicEnvelope } from "@/components/invitation/CinematicEnvelope";
import { OccasionsSection } from "@/components/invitation/OccasionsSection";

function GoldLine() { return <span className="lux-line" aria-hidden="true" />; }
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`lux-reveal ${className}`}>{children}</div>;
}

export default function Page() {
  const [opened, setOpened] = useState(false);
  const [music, setMusic] = useState(false);
  const [language, setLanguage] = useState<"EN" | "TE">("EN");
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    document.body.style.overflow = opened ? "auto" : "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, [opened]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (music) {
      audio.pause();
      setMusic(false);
      return;
    }
    try {
      await audio.play();
      setMusic(true);
    } catch {
      setMusic(false);
    }
  };

  return (
    <div className="luxury-invitation cultural-invitation">
      <PremiumAtmosphere />
      <audio ref={audioRef} loop preload="none" src={weddingConfig.music.source} />
      {!opened && <CinematicEnvelope onOpen={() => setOpened(true)} />}

      {opened && <main>
        <nav className="lux-nav cultural-nav">
          <a href="#top" className="lux-nav-mark">K<span>&</span>T</a>
          <div className="lux-nav-links">
            <a href="#celebrations">Veedukalu</a>
            <a href="#muhurtham">Pelli Pandiri</a>
            <a href="#gallery">Memories</a>
            <a href="#venue">Venue</a>
          </div>
          <div className="lux-nav-actions">
            <button aria-label="Switch language" onClick={() => setLanguage(language === "EN" ? "TE" : "EN")}>{language}</button>
            <button aria-label="Toggle music" onClick={toggleMusic}>{music ? <Volume2 size={16} /> : <VolumeX size={16} />}</button>
          </div>
        </nav>

        <section id="top" className="lux-hero cultural-hero">
          <div className="cultural-hero-torana" aria-hidden="true">
            <span>🌿</span><span>✦</span><span>🌿</span><span>✦</span><span>🌿</span>
          </div>
          <div className="lux-hero-image">
            <Image src={weddingConfig.couplePhoto} alt="Kavya and Tejas" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="lux-hero-overlay" />
          <div className="cultural-hero-lamp cultural-lamp-left" aria-hidden="true">🪔</div>
          <div className="cultural-hero-lamp cultural-lamp-right" aria-hidden="true">🪔</div>
          <div className="lux-hero-copy">
            <p className="lux-micro">శుభమస్తు · WITH THE BLESSINGS OF OUR FAMILIES</p>
            <p className="cultural-kicker">ఓం శ్రీ గణేశాయ నమః</p>
            <h1>{language === "TE" ? "కావ్య & తేజస్" : <>Kavya <span>&</span> Tejas</>}</h1>
            <GoldLine />
            <p className="lux-hero-date">27 · 08 · 2026</p>
            <p className="cultural-location">VIJAYAWADA · ANDHRA PRADESH</p>
            <p className="lux-hero-sub">{language === "TE" ? "మా వివాహ వేడుకకు మీకు ఆహ్వానం." : "We invite you to celebrate our Telugu wedding, rooted in family, tradition and love."}</p>
          </div>
          <a href="#welcome" className="lux-scroll"><span>ENTER THE CELEBRATION</span></a>
        </section>

        <section id="welcome" className="heritage-intro">
          <div className="heritage-arch" aria-hidden="true"><span>✦</span></div>
          <p className="lux-micro gold">మంగళం · MANGALAM</p>
          <h2>A Telugu wedding,<br /><em>from our roots to your heart.</em></h2>
          <p className="heritage-lead">Every detail of this invitation follows the language of a South Indian Hindu wedding — mango leaves at the threshold, jasmine in the air, brass lamps glowing before the sacred fire, and two families gathering beneath the pelli pandiri.</p>
          <div className="heritage-thread" aria-label="Cultural elements">
            <span><b>🌿</b>MANGO LEAVES</span><i>·</i><span><b>✿</b>JASMINE</span><i>·</i><span><b>🪔</b>DEEPAM</span><i>·</i><span><b>◈</b>KOLAM</span><i>·</i><span><b>✦</b>AGNI</span>
          </div>
          <div className="heritage-mantra"><span>शुभमस्तु</span><small>May this beginning be auspicious.</small></div>
        </section>

        <div className="cultural-divider" aria-hidden="true"><span>🌿</span><i>✦</i><span>🪔</span><i>✦</i><span>🌿</span></div>

        <section id="celebrations" className="celebration-overview">
          <div className="celebration-heading">
            <span className="lux-section-number">01</span>
            <p className="lux-micro gold">మా వేడుకలు · OUR CELEBRATIONS</p>
            <h2>One auspicious day.<br /><em>Three beautiful moments.</em></h2>
            <p>Haldi, reception and muhurtham — each celebration carrying a different part of the same family story.</p>
          </div>
          <div className="celebration-list">
            <article><span className="celebration-no">01</span><div><b>HALDI · NALUGU</b><h3>Colour & blessings</h3><p>27 August · 10:30 AM</p></div><span className="celebration-symbol">✦</span></article>
            <article><span className="celebration-no">02</span><div><b>RECEPTION</b><h3>An evening together</h3><p>27 August · 6:00 PM</p></div><span className="celebration-symbol">✦</span></article>
            <article><span className="celebration-no">03</span><div><b>MUHURTHAM · PELLI</b><h3>The sacred beginning</h3><p>27 August · 11:41 PM</p></div><span className="celebration-symbol">✦</span></article>
          </div>
          <p className="celebration-note">ALL THREE CELEBRATIONS · ISHAAR STAYCATION · VIJAYAWADA</p>
        </section>

        <OccasionsSection />

        <section className="ritual-strip" aria-label="Wedding traditions">
          <div><span>01</span><b>పసుపు</b><small>HALDI</small></div>
          <div><span>02</span><b>పెళ్లి పందిరి</b><small>PELLI PANDIRI</small></div>
          <div><span>03</span><b>అగ్ని</b><small>SACRED FIRE</small></div>
          <div><span>04</span><b>సప్తపది</b><small>SEVEN STEPS</small></div>
        </section>

        <section id="muhurtham"><MandapScene /></section>

        <section className="family-blessing">
          <div className="family-blessing-inner">
            <p className="lux-micro gold">THE HEART OF AN ANDHRA WEDDING</p>
            <h2>Two people.<br /><em>Two families. One home.</em></h2>
            <p>Because a Telugu wedding is never only about the couple. It is the meeting of families, blessings of elders, sacred rituals and the promise to walk together.</p>
            <GoldLine />
            <div className="family-blessing-words"><span>కుటుంబం</span><i>·</i><span>స్నేహం</span><i>·</i><span>ప్రేమ</span><i>·</i><span>మంగళం</span></div>
          </div>
        </section>

        <CinematicGallery />

        <section id="venue" className="lux-venue lux-paper cultural-venue">
          <div className="lux-section-number">05</div>
          <Reveal className="lux-venue-grid">
            <div>
              <p className="lux-micro gold">వేదిక · THE VENUE</p>
              <h2>Ishaar<br /><em>Staycation</em></h2>
              <p className="venue-cultural-line">A celebration in Vijayawada, surrounded by the warmth of Andhra.</p>
              <p className="lux-address">Chirravuru, Andhra Pradesh 522303<br />India</p>
              <a className="lux-map" href={weddingConfig.wedding.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={15} /> OPEN IN MAPS <ArrowUpRight size={14} /></a>
            </div>
            <div className="lux-venue-card">
              <div className="lux-venue-card-top"><CalendarDays size={18} /><span>THURSDAY · 27 AUGUST</span></div>
              <strong>27</strong><span>AUGUST</span><span>2026</span><GoldLine /><small>HALDI · RECEPTION · MUHURTHAM</small>
            </div>
          </Reveal>
        </section>

        <section id="rsvp" className="lux-final cultural-final">
          <div className="cultural-final-pattern" aria-hidden="true">✦　🌿　✦　🪔　✦　🌿　✦</div>
          <Reveal className="lux-final-copy">
            <p className="lux-micro gold">శుభమస్తు · WITH LOVE</p>
            <h2>Kavya <span>&</span> Tejas</h2>
            <p>We would be honoured to have you with us<br />as we begin this new chapter together.</p>
            <GoldLine />
            <p className="lux-final-date">27 · 08 · 2026</p>
            <p className="cultural-final-place">ISHAAR STAYCATION · VIJAYAWADA</p>
            <a className="lux-rsvp cultural-rsvp" href="#venue">SAVE OUR DATE</a>
          </Reveal>
          <footer>మంగళం · MADE WITH LOVE · KAVYA & TEJAS · 2026</footer>
        </section>

        <style jsx global>{`
          .cultural-invitation{background:#080807}.cultural-nav{border-bottom:1px solid rgba(211,171,91,.18)}
          .cultural-hero:before{content:"";position:absolute;z-index:4;inset:0;pointer-events:none;border:1px solid rgba(232,203,137,.22)}
          .cultural-hero-torana{position:absolute;z-index:5;top:18px;left:50%;transform:translateX(-50%);display:flex;gap:18px;color:#e1bd70;font-size:1rem;letter-spacing:.15em;opacity:.9}.cultural-hero-torana span:nth-child(odd){font-size:1.2rem}.cultural-hero-lamp{position:absolute;z-index:5;bottom:16%;font-size:2rem;filter:drop-shadow(0 0 18px rgba(239,190,77,.35));opacity:.8}.cultural-lamp-left{left:7%}.cultural-lamp-right{right:7%}.cultural-kicker{font-family:serif;font-size:.95rem;color:#e6cb91;letter-spacing:.08em;margin-bottom:15px}.cultural-location{font:500 .46rem var(--font-label);letter-spacing:.3em;color:#d0b36f;margin-top:13px}.cultural-hero .lux-hero-sub{max-width:620px;margin-left:auto;margin-right:auto}
          .heritage-intro{position:relative;overflow:hidden;text-align:center;padding:125px 22px 110px;background:radial-gradient(circle at 50% 35%,rgba(201,164,91,.12),transparent 34%),#0a0907;color:#f1e7d7}.heritage-arch{width:150px;height:75px;margin:0 auto 25px;border:1px solid rgba(218,182,105,.55);border-bottom:0;border-radius:90px 90px 0 0;display:grid;place-items:center;color:#d8b56a;font-size:.8rem}.heritage-intro h2{font:300 clamp(3rem,6.5vw,6rem)/.92 var(--font-display);letter-spacing:-.045em;margin:20px 0}.heritage-intro h2 em{color:#d1a95c}.heritage-lead{max-width:760px;margin:0 auto;color:#9f9585;line-height:1.9;font-size:1rem}.heritage-thread{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:14px 17px;margin:38px auto 0;max-width:900px;color:#b99551;font:500 .47rem var(--font-label);letter-spacing:.2em}.heritage-thread span{display:flex;gap:7px;align-items:center}.heritage-thread b{font-size:.8rem}.heritage-thread i{font-style:normal;color:#6f5b37}.heritage-mantra{margin:44px auto 0;padding:20px;border-top:1px solid rgba(218,182,105,.25);border-bottom:1px solid rgba(218,182,105,.25);width:min(420px,100%)}.heritage-mantra span{display:block;font:1.8rem serif;color:#e5c980}.heritage-mantra small{display:block;margin-top:6px;color:#847968;font:italic .75rem var(--font-display)}
          .cultural-divider{height:70px;background:#080807;display:flex;align-items:center;justify-content:center;gap:18px;color:#bd9650;font-size:.75rem}.cultural-divider i{font-style:normal;color:#6f5935}
          .celebration-overview{position:relative;padding:120px 22px 95px;background:#f2eadb;color:#251d15;text-align:center;overflow:hidden}.celebration-overview:before{content:"";position:absolute;inset:20px;border:1px solid rgba(126,87,34,.18);pointer-events:none}.celebration-heading{max-width:750px;margin:auto}.celebration-heading h2{font:300 clamp(3rem,6vw,5.7rem)/.9 var(--font-display);letter-spacing:-.045em;margin:20px 0}.celebration-heading h2 em{color:#9d6f2e}.celebration-heading>p:last-child{max-width:570px;margin:auto;color:#786b5a;line-height:1.8}.celebration-list{max-width:1000px;margin:65px auto 0;border-top:1px solid rgba(112,77,28,.25);text-align:left}.celebration-list article{display:grid;grid-template-columns:70px 1fr 40px;align-items:center;gap:20px;padding:28px 10px;border-bottom:1px solid rgba(112,77,28,.25)}.celebration-no{font:400 .48rem var(--font-label);letter-spacing:.2em;color:#9d6f2e}.celebration-list b{font:500 .46rem var(--font-label);letter-spacing:.25em;color:#8d6938}.celebration-list h3{font:400 clamp(1.8rem,4vw,3rem) var(--font-display);margin:5px 0}.celebration-list p{margin:0;color:#887967;font:500 .5rem var(--font-label);letter-spacing:.17em}.celebration-symbol{color:#a87932}.celebration-note{margin:42px 0 0;font:500 .46rem var(--font-label);letter-spacing:.22em;color:#94764b}
          .ritual-strip{display:grid;grid-template-columns:repeat(4,1fr);background:#15110b;border-top:1px solid rgba(224,190,112,.22);border-bottom:1px solid rgba(224,190,112,.22)}.ritual-strip>div{padding:30px 15px;text-align:center;border-right:1px solid rgba(224,190,112,.12)}.ritual-strip>div:last-child{border-right:0}.ritual-strip span,.ritual-strip small{display:block;font:500 .43rem var(--font-label);letter-spacing:.2em;color:#806f57}.ritual-strip b{display:block;margin:7px 0;color:#e0c27d;font:1.05rem serif}.family-blessing{position:relative;padding:130px 22px;text-align:center;background:radial-gradient(circle at 50% 40%,rgba(199,160,84,.13),transparent 35%),#090908;color:#f0e5d4}.family-blessing-inner{max-width:750px;margin:auto}.family-blessing h2{font:300 clamp(3rem,6vw,5.8rem)/.9 var(--font-display);margin:20px 0}.family-blessing h2 em{color:#d0a75a}.family-blessing p{max-width:650px;margin:0 auto;color:#958b7b;line-height:1.9}.family-blessing .lux-line{margin:32px auto}.family-blessing-words{display:flex;justify-content:center;gap:15px;flex-wrap:wrap;color:#c8a15b;font:1.1rem serif}.family-blessing-words i{font-style:normal;color:#6c5632}
          .cultural-venue{background:#efe5d2}.venue-cultural-line{max-width:420px;color:#8d7656;line-height:1.7}.cultural-final{background:radial-gradient(circle at 50% 35%,rgba(203,164,87,.15),transparent 34%),#080807}.cultural-final-pattern{position:absolute;top:40px;left:50%;transform:translateX(-50%);width:100%;text-align:center;color:#b88d43;opacity:.55;font-size:.8rem;letter-spacing:.3em}.cultural-final-place{font:500 .47rem var(--font-label);letter-spacing:.25em;color:#9f865d;margin-top:12px}.cultural-rsvp{display:inline-flex;align-items:center;justify-content:center;text-decoration:none;margin-top:20px}
          @media(max-width:760px){.cultural-hero-torana{gap:9px;font-size:.7rem}.cultural-hero-lamp{font-size:1.5rem;bottom:18%}.cultural-lamp-left{left:4%}.cultural-lamp-right{right:4%}.heritage-intro{padding:95px 18px 85px}.heritage-intro h2{font-size:clamp(2.8rem,12vw,4.4rem)}.heritage-lead{font-size:.92rem}.heritage-thread{font-size:.4rem;gap:11px 10px}.celebration-overview{padding:90px 15px 80px}.celebration-overview:before{inset:10px}.celebration-list{margin-top:45px}.celebration-list article{grid-template-columns:36px 1fr 20px;gap:10px;padding:22px 3px}.celebration-list h3{font-size:2rem}.celebration-list b{font-size:.4rem}.celebration-list p{font-size:.4rem}.celebration-note{line-height:1.7}.ritual-strip{grid-template-columns:repeat(2,1fr)}.ritual-strip>div:nth-child(2){border-right:0}.ritual-strip>div:nth-child(-n+2){border-bottom:1px solid rgba(224,190,112,.12)}.family-blessing{padding:95px 18px}.family-blessing h2{font-size:clamp(2.9rem,12vw,4.5rem)}.cultural-final-pattern{font-size:.58rem;letter-spacing:.12em}}
        `}</style>
      </main>}
    </div>
  );
}
