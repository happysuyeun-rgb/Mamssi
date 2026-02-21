"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#07110c] text-[#e9f3ee] font-sans">
      <div className="max-w-[980px] mx-auto py-8 px-4 md:px-[18px] pb-20">
        <header className="flex flex-wrap gap-4 justify-between items-start mb-[18px]">
          <div className="flex gap-3 items-center">
            <div
              className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[rgba(101,199,166,.35)] to-[rgba(255,255,255,.06)]
                border border-[rgba(101,199,166,.25)] shadow-[0_10px_30px_rgba(0,0,0,.35)] flex items-center justify-center"
              aria-hidden
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3c2.8 0 5 2.2 5 5 0 2.9-2.4 6-5 6s-5-3.1-5-6c0-2.8 2.2-5 5-5Z" stroke="rgba(233,243,238,.95)" strokeWidth="1.6" />
                <path d="M6 21c.8-3.9 3.3-6 6-6s5.2 2.1 6 6" stroke="rgba(233,243,238,.95)" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 7c1.7 0 3.4-.8 4.5-2.1" stroke="rgba(101,199,166,.9)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-[26px] font-medium tracking-tight m-0">마음,씨 이용약관</h1>
              <div className="text-[#b9c9c1] text-sm mt-1.5">
                시행일자: <strong>2026-03-01</strong> &nbsp;|&nbsp; 버전: v3.0
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 items-center">
            <button
              type="button"
              onClick={() => window.print()}
              className="cursor-pointer border border-[rgba(101,199,166,.45)] bg-[rgba(101,199,166,.14)] text-[#e9f3ee] rounded-xl py-2.5 px-3 text-sm"
            >
              인쇄 / PDF 저장
            </button>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="cursor-pointer border border-white/14 bg-white/5 text-[#e9f3ee] rounded-xl py-2.5 px-3 text-sm"
            >
              맨 위로
            </button>
          </div>
        </header>

        <main className="bg-[rgba(17,24,21,.92)] border border-white/10 rounded-[18px] p-5 md:p-[22px_18px] shadow-[0_18px_60px_rgba(0,0,0,.45)] leading-[1.75]">
          <p className="my-0 mb-2.5">
            본 약관은 마음,씨(이하 &quot;서비스&quot;)가 제공하는 감정 기록 및 공감 기반 서비스 이용과 관련하여, 서비스와 이용자 간의 권리·의무 및 책임을 규정합니다.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-white/14 to-transparent my-[18px]" />

          <h2 id="p1" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제1조 (목적)</h2>
          <p className="my-0 mb-2.5">이 약관은 이용자가 마음,씨가 제공하는 감정 기록, 공감숲 커뮤니티, 알림 및 관련 서비스를 이용함에 있어 필요한 기본 사항을 정합니다.</p>

          <h2 id="p2" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제2조 (용어의 정의)</h2>
          <ol className="my-2 mb-3 pl-5 space-y-1.5 list-decimal">
            <li>&quot;이용자&quot;란 본 약관에 따라 서비스를 이용하는 모든 자를 말합니다.</li>
            <li>&quot;회원&quot;이란 소셜 로그인 등 서비스가 정한 절차에 따라 가입하여 서비스를 이용하는 자를 말합니다.</li>
            <li>&quot;게스트&quot;란 회원가입 없이 제한적으로 서비스를 이용하는 자를 말합니다.</li>
            <li>&quot;감정 기록&quot;이란 이용자가 서비스 내에 작성·저장하는 감정 일기, 텍스트, 이미지 등 정서·감정을 표현한 콘텐츠를 말합니다.</li>
            <li>&quot;공감숲&quot;이란 회원이 공개 설정한 감정 기록을 공유하고, 다른 회원과 공감할 수 있는 커뮤니티 공간을 말합니다.</li>
            <li>&quot;씨앗&quot;이란 감정 기록 및 공감 활동을 통해 성장하는 서비스 내 시각화 요소를 말합니다.</li>
          </ol>

          <h2 id="p3" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제3조 (약관의 효력 및 변경)</h2>
          <ol className="my-2 mb-3 pl-5 space-y-1.5 list-decimal">
            <li>이 약관은 이용자가 회원가입 시 동의하고 서비스가 승낙함으로써 효력이 발생합니다.</li>
            <li>서비스는 관련 법령을 위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
            <li>약관을 개정하는 경우, 서비스는 변경 내용과 적용일자를 적용일 7일 전(이용자에게 불리하거나 중요한 변경의 경우 30일 전)까지 서비스 내 공지사항 또는 앱 내 알림 등으로 안내합니다.</li>
            <li>이용자가 변경 적용일 이후에도 서비스를 계속 이용하는 경우, 변경 약관에 동의한 것으로 봅니다.</li>
            <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 회원 탈퇴를 요청할 수 있습니다.</li>
          </ol>

          <h2 id="p4" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제4조 (이용계약 체결 및 서비스 내용)</h2>
          <ol className="my-2 mb-3 pl-5 space-y-1.5 list-decimal">
            <li>이용계약은 이용자가 약관에 동의하고 소셜 로그인 등으로 회원가입을 신청한 후, 서비스가 이를 승낙함으로써 체결됩니다.</li>
            <li>서비스는 다음과 같은 기능을 제공합니다.
              <ul className="list-[lower-alpha] pl-5 mt-1 space-y-0.5">
                <li>감정 기록 작성·수정·삭제 기능</li>
                <li>감정 기록 시각화 및 감정 성장 관련 콘텐츠 제공</li>
                <li>공감숲을 통한 공개 게시글 열람 및 공감 기능</li>
                <li>기록 리마인드, 공감 알림 등 다양한 알림 제공</li>
                <li>마이페이지를 통한 개인 설정 관리</li>
                <li>기타 서비스가 제공하는 부가 기능</li>
              </ul>
            </li>
            <li>서비스는 운영상·기술상 필요에 따라 서비스의 전부 또는 일부를 변경할 수 있으며, 이용자에게 중요한 영향을 미치는 경우 사전에 공지합니다.</li>
            <li>기능 개선 또는 정책 변경으로 일부 기능이 수정·중단될 수 있습니다.</li>
          </ol>

          <h2 id="p5" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제5조 (가입 자격 및 미성년자 보호)</h2>
          <p className="my-0 mb-2.5">1. 서비스는 만 14세 이상만 이용할 수 있습니다.</p>
          <p className="my-0 mb-2.5">2. 만 14세 미만 아동이 가입한 사실이 확인될 경우, 서비스는 해당 계정을 즉시 정지하고 관련 데이터를 삭제합니다.</p>
          <p className="my-0 mb-2.5">3. 만 14세 이상 19세 미만의 미성년자는 법정대리인의 동의를 받아 가입할 수 있습니다. 서비스는 필요 시 법정대리인의 동의 여부를 확인할 수 있으며, 동의를 확인할 수 없는 경우 가입을 제한하거나 계정을 정지할 수 있습니다.</p>
          <p className="my-0 mb-2.5">4. 이용자는 회원가입 시 본인의 정확한 생년월일을 입력해야 하며, 허위 정보를 입력한 경우 서비스 이용이 제한될 수 있습니다.</p>
          <p className="my-0 mb-2.5">5. 서비스는 미성년자 보호를 위해 다음 사항을 이행합니다.
            <ul className="list-[lower-alpha] pl-5 mt-1 space-y-0.5">
              <li>부적절한 콘텐츠로부터 미성년자를 보호하기 위한 필터링 시스템 운영</li>
              <li>미성년자 대상 유해 콘텐츠에 대한 신고 접수 및 즉시 조치</li>
              <li>미성년자의 개인정보 보호를 위한 강화된 보안 조치</li>
            </ul>
          </p>

          <h2 id="p6" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제6조 (회원 및 게스트의 이용 범위)</h2>
          <p className="my-0 mb-2.5"><strong>1. 게스트</strong></p>
          <ul className="list-[lower-alpha] pl-5 mb-2 space-y-0.5">
            <li>서비스 일부 화면 및 공개된 공감숲 게시글 열람 가능</li>
            <li>감정 기록 작성, 공감숲 게시글 작성·공감 기능은 제한될 수 있습니다.</li>
          </ul>
          <p className="my-0 mb-2.5"><strong>2. 회원</strong></p>
          <ul className="list-[lower-alpha] pl-5 mb-2 space-y-0.5">
            <li>감정 기록 작성·수정·삭제 가능</li>
            <li>공감숲 게시글 공개 및 공감 기능 이용 가능</li>
            <li>개인화 설정 및 알림 기능 등 서비스의 주요 기능 이용 가능</li>
            <li>씨앗 성장 및 감정꽃 컬렉션 기능 이용 가능</li>
          </ul>

          <h2 id="p7" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제7조 (감정 기록 제한 정책)</h2>
          <ol className="my-2 mb-3 pl-5 space-y-1.5 list-decimal">
            <li>서비스의 안정적 운영과 이용자 간 균형을 위해 다음과 같은 기록 제한을 둡니다.
              <ul className="list-[lower-alpha] pl-5 mt-1 space-y-0.5">
                <li>비공개 감정 기록(나만보기): 하루 1회까지 작성 가능</li>
                <li>공개 감정 기록(공감숲 게시): 하루 3회까지 작성 가능</li>
              </ul>
            </li>
            <li>위 제한은 매일 00시(KST) 기준으로 초기화됩니다.</li>
            <li>서비스는 운영 정책에 따라 기록 횟수 제한을 조정할 수 있으며, 변경 시 사전에 공지합니다.</li>
          </ol>

          <h2 id="p8" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제8조 (이용자의 의무)</h2>
          <p className="my-0 mb-2.5">1. 이용자는 관련 법령, 이 약관 및 서비스 내 개별 안내를 준수해야 합니다.</p>
          <p className="my-0 mb-2.5">2. 이용자는 다음 각 호의 행위를 해서는 안 됩니다.</p>
          <ul className="list-[lower-alpha] pl-5 mb-2 space-y-0.5">
            <li>타인의 감정 기록, 게시글, 개인정보를 무단 수집·이용하거나 제3자에게 제공하는 행위</li>
            <li>욕설, 혐오 표현, 폭력적·차별적 내용 등 타인에게 피해를 줄 수 있는 콘텐츠를 게시하는 행위</li>
            <li>자해·자살 조장, 음란물, 불법 정보 등 법령에 위배되거나 공공질서·미풍양속에 반하는 콘텐츠를 게시하는 행위</li>
            <li>광고성 스팸, 도배, 상업적 홍보 등 서비스의 정상적인 운영을 방해하는 행위</li>
            <li>서비스의 정상적인 운영을 방해하거나 시도하는 행위(불법 프로그램, 시스템 공격, 버그 악용 등)</li>
            <li>타인의 명의·계정을 도용하거나 다른 사람을 사칭하는 행위</li>
            <li>미성년자에게 유해한 정보를 제공하거나 성적 수치심을 유발하는 행위</li>
            <li>허위 사실 유포, 명예훼손, 사생활 침해 등 타인의 권리를 침해하는 행위</li>
            <li>법령에 위반되거나 공공질서·미풍양속에 반하는 행위</li>
          </ul>
          <p className="my-0 mb-2.5">3. 회원은 자신의 계정(연결된 소셜 계정 포함)을 안전하게 관리해야 하며, 제3자가 사용하지 않도록 해야 합니다.</p>
          <p className="my-0 mb-2.5">4. 회원은 계정 도용 또는 부정 사용을 발견한 즉시 서비스에 신고해야 합니다.</p>
          <p className="my-0 mb-2.5">5. 서비스는 위 금지 행위가 확인된 경우, 경고, 일정 기간 이용 제한, 영구 이용 제한 등 필요한 조치를 취할 수 있습니다.</p>

          <h2 id="p9" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제9조 (콘텐츠의 권리와 이용)</h2>
          <p className="my-0 mb-2.5">이용자가 서비스 내에 작성·저장하는 감정 기록 및 게시글 등 콘텐츠(이하 &quot;이용자 콘텐츠&quot;)의 저작권 및 기타 지적재산권은 이용자에게 귀속됩니다. 이용자는 서비스에 이용자 콘텐츠를 게시함으로써, 서비스가 서비스 제공·운영, 기능 개선, 서비스 내 노출, 데이터 백업 등 목적 범위 내에서 비독점적·무상 이용 권리를 허여합니다. 자세한 내용은 약관 전문을 참조해 주세요.</p>

          <h2 id="p10" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제10조 (정서 데이터의 활용 및 제3자 제공)</h2>
          <p className="my-0 mb-2.5">서비스는 이용자의 감정 기록 및 정서 관련 데이터를 서비스 품질 개선, 학술 연구, 통계 분석 등 목적으로 익명화·통계화된 형태로만 활용할 수 있으며, 개인정보 처리방침에 따릅니다.</p>

          <h2 id="p11" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제11조 (콘텐츠 자동 모니터링 및 필터링)</h2>
          <p className="my-0 mb-2.5">서비스는 이용자 보호 및 건전한 커뮤니티 운영을 위해 AI 기반 자동 필터링 시스템을 운영할 수 있습니다. 욕설, 혐오 표현, 자해·자살 관련 표현, 음란물, 광고성 스팸 등은 자동으로 차단되거나 게시가 제한될 수 있습니다.</p>

          <h2 id="p12" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제12조 (신고 및 제재)</h2>
          <p className="my-0 mb-2.5">이용자는 부적절한 게시글이나 이용자를 발견한 경우 서비스 내 신고 기능을 통해 신고할 수 있습니다. 서비스는 신고 접수 시 게시글 자동 숨김, 관리자 검토 후 위반 시 삭제 및 작성자 제재, 반복·악의적 위반 시 단계별 이용 제한(7일, 30일, 영구 정지) 등을 적용할 수 있습니다.</p>

          <h2 id="p13" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제13조 (광고 게재)</h2>
          <p className="my-0 mb-2.5">서비스는 안정적인 운영 및 무료 서비스 제공을 위해 앱 내에 광고를 게재할 수 있습니다. 광고는 공감숲 피드, 감정 기록 상세 화면 등에 노출될 수 있으며, 운영 정책에 따라 조정됩니다.</p>

          <h2 id="p14" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제14조 (회원 탈퇴 및 데이터 처리)</h2>
          <p className="my-0 mb-2.5">회원은 언제든지 회원 탈퇴를 신청할 수 있으며, 탈퇴 시 계정은 즉시 비활성화(소프트 삭제) 처리됩니다. 탈퇴일로부터 30일간 복구 유예기간이 부여되며, 30일 경과 후 영구 삭제됩니다. 자세한 내용은 개인정보 처리방침을 참조해 주세요.</p>

          <h2 id="p15" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제15조 (서비스의 성격 및 한계)</h2>
          <p className="my-0 mb-2.5">본 서비스는 감정 기록 및 공유를 위한 도구로서, 의료·심리 상담·치료 서비스가 아닙니다. 정신 건강 문제, 위기 상황에서는 정신건강복지센터(1577-0199), 자살예방상담전화(1393) 등 전문기관의 도움을 받으시기 바랍니다.</p>

          <h2 id="p16" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제16조 (서비스의 중단 및 종료)</h2>
          <p className="my-0 mb-2.5">서비스는 시스템 점검, 장애, 천재지변 등 사유로 일시 중단할 수 있으며, 영업상·정책상 필요 시 서비스 종료 시 최소 30일 전 공지합니다.</p>

          <h2 id="p17" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제17조 (개인정보 보호)</h2>
          <p className="my-0 mb-2.5">서비스는 「개인정보 보호법」 등 관련 법령에 따라 개인정보를 처리하며, 별도의 개인정보 처리방침을 수립·공개합니다.</p>

          <h2 id="p18" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제18조 (책임의 제한)</h2>
          <p className="my-0 mb-2.5">서비스는 이용자 콘텐츠의 진실성·정확성·적법성을 보증하지 않으며, 이용자 간 분쟁에 개입할 의무가 없습니다. 다만 서비스의 고의 또는 중대한 과실로 인한 손해에 대해서는 관련 법령 범위 내에서 책임을 질 수 있습니다.</p>

          <h2 id="p19" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제19조 (면책 조항)</h2>
          <p className="my-0 mb-2.5">서비스는 이용자 간 거래·관계, 제3자 웹사이트 이용, 약관 위반으로 인한 손해 등에 대해 책임지지 않습니다.</p>

          <h2 id="p20" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제20조 (공지 및 통지)</h2>
          <p className="my-0 mb-2.5">서비스는 앱 내 공지, 푸시 알림, 이메일, 문자 등으로 이용자에게 통지할 수 있으며, 불특정 다수에게는 7일 이상 공지사항 게시로 개별 통지를 갈음할 수 있습니다.</p>

          <h2 id="p21" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제21조 (권리의 귀속)</h2>
          <p className="my-0 mb-2.5">서비스 및 서비스 내 콘텐츠에 대한 저작권·지적재산권은 서비스 운영자에게 귀속됩니다.</p>

          <h2 id="p22" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제22조 (분쟁 해결)</h2>
          <p className="my-0 mb-2.5">분쟁은 상호 협의로 해결하며, 협의 불가 시 개인정보분쟁조정위원회, 한국인터넷진흥원, 한국소비자원 등 관련 기관에 조정 신청할 수 있습니다.</p>

          <h2 id="p23" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제23조 (준거법 및 관할법원)</h2>
          <p className="my-0 mb-2.5">이 약관 및 서비스 이용 관련 분쟁에는 대한민국 법령이 적용되며, 민사소송법상 관할 법원을 제1심 관할 법원으로 합니다.</p>

          <h2 id="p24" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">제24조 (운영자 정보)</h2>
          <div className="overflow-hidden rounded-[14px] border border-white/12 bg-black/20 my-2.5 text-sm">
            <table className="w-full border-collapse border-separate border-spacing-0">
              <tbody>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">상호</th>
                  <td className="p-2.5 align-top border-b border-white/8">마음씨 서비스</td>
                </tr>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">대표자</th>
                  <td className="p-2.5 align-top border-b border-white/8">이서아</td>
                </tr>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5">이메일</th>
                  <td className="p-2.5 align-top">
                    <a href="mailto:mamssi.official@gmail.com" className="text-[#e9f3ee] underline decoration-[rgba(101,199,166,.5)]">
                      mamssi.official@gmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-3 rounded-[14px] border border-[rgba(101,199,166,.22)] bg-[rgba(101,199,166,.08)] text-sm">
            <strong>부칙</strong>
            <br />
            1. (시행일) 이 약관은 2026년 3월 1일부터 적용됩니다.
            <br />
            2. (경과조치) 본 약관 시행 이전에 가입한 회원의 경우, 시행일로부터 30일 이내에 동의 여부를 선택할 수 있으며, 동의하지 않을 경우 회원 탈퇴를 통해 서비스 이용을 종료할 수 있습니다.
            <br />
            3. (이전 약관과의 관계) 본 약관은 v2.2 약관을 전면 개정한 것으로, v2.2의 모든 내용을 대체합니다.
          </div>

          <footer className="mt-[18px] text-[#b9c9c1] text-[13px]">
            © Mamssi. All rights reserved.
          </footer>
        </main>

        <div className="mt-8 text-center">
          <Link href="/" className="text-[#65c7a6] hover:text-[#65c7a6]/80 underline">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
