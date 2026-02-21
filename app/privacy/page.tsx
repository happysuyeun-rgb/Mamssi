"use client";

import Link from "next/link";

export default function PrivacyPage() {
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
                <path
                  d="M12 3c2.8 0 5 2.2 5 5 0 2.9-2.4 6-5 6s-5-3.1-5-6c0-2.8 2.2-5 5-5Z"
                  stroke="rgba(233,243,238,.95)"
                  strokeWidth="1.6"
                />
                <path
                  d="M6 21c.8-3.9 3.3-6 6-6s5.2 2.1 6 6"
                  stroke="rgba(233,243,238,.95)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M12 7c1.7 0 3.4-.8 4.5-2.1"
                  stroke="rgba(101,199,166,.9)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-[26px] font-medium tracking-tight m-0">
                마음,씨 개인정보처리방침
              </h1>
              <div className="text-[#b9c9c1] text-sm mt-1.5">
                시행일자: <strong>2026-03-01</strong> &nbsp;|&nbsp; 버전: v1.0
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 items-center">
            <button
              type="button"
              onClick={() => window.print()}
              className="cursor-pointer border border-[rgba(101,199,166,.45)] bg-[rgba(101,199,166,.14)] text-[#e9f3ee]
                rounded-xl py-2.5 px-3 text-sm"
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

        <main className="bg-[rgba(17,24,21,.92)] border border-white/10 rounded-[18px] p-5 md:p-[22px_18px] shadow-[0_18px_60px_rgba(0,0,0,.45)]">
          <nav
            className="my-0 mb-[18px] py-3.5 px-3.5 pl-4 border border-dashed border-white/16 rounded-[14px] bg-black/20"
            aria-label="목차"
          >
            <strong className="block mb-1.5">목차</strong>
            <ol className="m-0 pl-5 space-y-1">
              <li>
                <a href="#p1" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  1. 총칙
                </a>
              </li>
              <li>
                <a href="#p2" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  2. 수집하는 개인정보 항목 및 수집 방법
                </a>
              </li>
              <li>
                <a href="#p3" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  3. 개인정보의 처리 목적
                </a>
              </li>
              <li>
                <a href="#p4" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  4. 개인정보의 보유 및 이용기간
                </a>
              </li>
              <li>
                <a href="#p5" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  5. 개인정보의 제3자 제공
                </a>
              </li>
              <li>
                <a href="#p6" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  6. 개인정보 처리의 위탁
                </a>
              </li>
              <li>
                <a href="#p7" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  7. 개인정보의 국외 이전
                </a>
              </li>
              <li>
                <a href="#p8" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  8. 이용자의 권리와 행사 방법
                </a>
              </li>
              <li>
                <a href="#p9" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  9. 개인정보의 파기
                </a>
              </li>
              <li>
                <a href="#p10" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  10. 개인정보의 안전성 확보 조치
                </a>
              </li>
              <li>
                <a href="#p11" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  11. 쿠키 및 로그(접속기록) 처리
                </a>
              </li>
              <li>
                <a href="#p12" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  12. 개인정보 보호책임자 및 문의처
                </a>
              </li>
              <li>
                <a href="#p13" className="text-[#e9f3ee] no-underline border-b border-[rgba(101,199,166,.25)] hover:border-[rgba(101,199,166,.75)]">
                  13. 개인정보처리방침의 변경
                </a>
              </li>
            </ol>
          </nav>

          <p className="my-0 mb-2.5 leading-[1.75]">
            마음,씨(이하 &quot;서비스&quot;)는 「개인정보 보호법」 등 관련 법령을 준수하며, 이용자의 개인정보를 보호하기 위해 본 개인정보처리방침을 수립·공개합니다. 본 방침은 서비스 웹(PWA) 및 향후 앱 형태의 서비스에 동일하게 적용됩니다.
          </p>
          <p className="my-0 mb-2.5 leading-[1.75]">
            본 방침은 마음,씨 이용약관과 함께 적용되며, 두 문서 간 내용이 상충하는 경우 관련 법령이 허용하는 범위에서 이용자에게 유리한 내용이 우선합니다.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-white/14 to-transparent my-[18px]" />

          <h2 id="p1" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">1. 총칙</h2>
          <p className="my-0 mb-2.5 leading-[1.75]">
            서비스는 이용자의 개인정보를 최소한으로 수집하며, 수집된 개인정보는 명시한 목적 범위 내에서만 이용합니다. 서비스 이용 과정에서 이용자가 작성하는 &quot;감정 기록&quot;에는 개인의 정서적 표현이 포함될 수 있으므로, 접근 권한 통제 및 보안 조치를 강화합니다.
          </p>
          <div className="mt-3.5 p-3 rounded-[14px] border border-[rgba(101,199,166,.22)] bg-[rgba(101,199,166,.08)] text-sm">
            <strong>민감정보 관련 안내</strong>
            <br />
            서비스는 이용자가 작성한 내용 중 일부가 건강정보 등 법령상 민감정보로 해석될 여지가 있을 수 있음을 인지하고 있으며, <strong>의료/건강 정보로서의 민감정보를 별도로 수집·분류하여 처리하지 않습니다</strong>. 이용자는 감정 기록 작성 시 본인이 공개를 원하지 않는 정보를 기재하지 않도록 주의해 주세요.
          </div>

          <h2 id="p2" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">2. 수집하는 개인정보 항목 및 수집 방법</h2>
          <h3 className="mt-3.5 mb-2 text-[15px] opacity-95">2.1 수집 항목</h3>
          <div className="overflow-hidden rounded-[14px] border border-white/12 bg-black/20 my-2.5 text-sm">
            <table className="w-full border-collapse border-separate border-spacing-0">
              <tbody>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">구분</th>
                  <td className="text-left p-2.5 align-top border-b border-white/8">필수 / 선택</td>
                </tr>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">회원가입/로그인</th>
                  <td className="text-left p-2.5 align-top border-b border-white/8"><strong>필수</strong>: 소셜 로그인 제공자 식별자(예: Supabase Auth의 user id), 이메일(제공자에서 제공하는 경우), 로그인 토큰/세션 정보<br /><strong>선택</strong>: 닉네임(씨앗 이름), 프로필 이미지</td>
                </tr>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">서비스 이용(기록/커뮤니티)</th>
                  <td className="text-left p-2.5 align-top border-b border-white/8"><strong>필수</strong>: 감정 기록(텍스트/메타데이터), 공개 여부 설정, 생성·수정 시각<br /><strong>선택</strong>: 이미지(사용자가 업로드하는 경우), 공감/신고 사유 및 메모</td>
                </tr>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5">자동 수집 정보</th>
                  <td className="text-left p-2.5 align-top">IP(일부 환경에서), 접속 일시, 사용자 에이전트(User Agent), 오류 로그(콘솔·런타임 에러), 서비스 이용 기록(페이지 이동 등)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="mt-3.5 mb-2 text-[15px] opacity-95">2.2 수집 방법</h3>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li>회원가입/로그인 및 서비스 이용 과정에서 이용자가 직접 입력하는 정보 수집</li>
            <li>서비스 이용 과정에서 자동 생성·수집되는 로그 및 접속기록 수집</li>
            <li>파일 업로드 기능을 통한 이미지 등 콘텐츠 업로드(선택)</li>
          </ul>

          <h2 id="p3" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">3. 개인정보의 처리 목적</h2>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li>회원 식별, 본인 확인, 로그인 유지 등 인증 기능 제공</li>
            <li>감정 기록 저장·조회·수정·삭제 및 개인화 설정 제공</li>
            <li>공감숲(커뮤니티) 운영: 공개 게시글 노출, 공감(좋아요), 신고 처리 및 악성 이용자 대응</li>
            <li>알림 제공(기록 변경, 공감 등 서비스 운영 알림)</li>
            <li>서비스 품질 개선, 오류 분석 및 보안(부정 이용 방지)</li>
            <li>고객 문의 응대 및 분쟁 대응</li>
            <li>법령에 따른 의무 이행</li>
          </ul>

          <h2 id="p4" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">4. 개인정보의 보유 및 이용기간</h2>
          <p className="my-0 mb-2.5 leading-[1.75]">
            서비스는 원칙적으로 개인정보 처리 목적이 달성되면 지체 없이 파기합니다. 다만, 법령 또는 서비스 운영 정책상 필요한 경우 아래와 같이 일정 기간 보관합니다.
          </p>
          <div className="overflow-hidden rounded-[14px] border border-white/12 bg-black/20 my-2.5 text-sm">
            <table className="w-full border-collapse border-separate border-spacing-0">
              <tbody>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">항목</th>
                  <th className="text-left p-2.5 align-top bg-white/5 border-b border-white/8">보유 기간</th>
                  <th className="text-left p-2.5 align-top bg-white/5 border-b border-white/8">근거</th>
                </tr>
                <tr>
                  <td className="p-2.5 align-top border-b border-white/8">회원 계정 정보(소셜 로그인 ID, 이메일 등)</td>
                  <td className="p-2.5 align-top border-b border-white/8">회원 탈퇴 시까지</td>
                  <td className="p-2.5 align-top border-b border-white/8">서비스 제공 및 계정 관리</td>
                </tr>
                <tr>
                  <td className="p-2.5 align-top border-b border-white/8">탈퇴 회원 계정 최소 정보(복구용 식별자 등)</td>
                  <td className="p-2.5 align-top border-b border-white/8">탈퇴일로부터 30일</td>
                  <td className="p-2.5 align-top border-b border-white/8">소프트 삭제 기간 동안 계정 복구 처리</td>
                </tr>
                <tr>
                  <td className="p-2.5 align-top border-b border-white/8">감정 기록/게시글/공감/알림</td>
                  <td className="p-2.5 align-top border-b border-white/8">회원 탈퇴 시까지. 탈퇴 후 백업 시스템에 최대 30일 보관 후 파기 또는 비식별화</td>
                  <td className="p-2.5 align-top border-b border-white/8">서비스 제공 및 장애 복구</td>
                </tr>
                <tr>
                  <td className="p-2.5 align-top border-b border-white/8">신고/제재 기록</td>
                  <td className="p-2.5 align-top border-b border-white/8">3년</td>
                  <td className="p-2.5 align-top border-b border-white/8">서비스 안전 및 분쟁 대응</td>
                </tr>
                <tr>
                  <td className="p-2.5 align-top">접속기록(로그, IP, UA 등)</td>
                  <td className="p-2.5 align-top">1년</td>
                  <td className="p-2.5 align-top">보안, 장애 대응, 이용 분석</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-3.5 p-3 rounded-[14px] border border-[rgba(101,199,166,.22)] bg-[rgba(101,199,166,.08)] text-sm">
            <strong>소프트 삭제 안내</strong>
            <br />
            회원탈퇴 시 계정 및 주요 데이터는 즉시 비활성화(소프트 삭제) 처리되며, 탈퇴일로부터 30일 동안은 복구 요청 시 복구가 가능할 수 있습니다. 30일이 경과하면 계정 및 데이터는 복구가 불가능한 방식으로 파기되거나 비식별화됩니다.
          </div>

          <h2 id="p5" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">5. 개인정보의 제3자 제공</h2>
          <p className="my-0 mb-2.5 leading-[1.75]">
            서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 다음의 경우 예외적으로 제공할 수 있습니다.
          </p>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li>이용자가 사전에 명시적으로 동의한 경우</li>
            <li>법령에 근거가 있거나, 수사기관·법원의 적법한 절차에 따른 요구가 있는 경우</li>
          </ul>

          <h2 id="p6" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">6. 개인정보 처리의 위탁</h2>
          <p className="my-0 mb-2.5 leading-[1.75]">
            서비스는 원활한 서비스 제공을 위하여 아래와 같이 개인정보 처리를 위탁하며, 위탁계약을 통해 개인정보 보호 의무를 부과·관리합니다.
          </p>
          <div className="overflow-hidden rounded-[14px] border border-white/12 bg-black/20 my-2.5 text-sm">
            <table className="w-full border-collapse border-separate border-spacing-0">
              <tbody>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">수탁자</th>
                  <td className="text-left p-2.5 align-top border-b border-white/8">위탁 업무 내용</td>
                </tr>
                <tr>
                  <td className="p-2.5 align-top border-b border-white/8">Supabase Inc.</td>
                  <td className="p-2.5 align-top border-b border-white/8">인증(Auth), 데이터베이스 저장(Postgres), 파일 저장(Storage) 등 서비스 인프라 제공</td>
                </tr>
                <tr>
                  <td className="p-2.5 align-top border-b border-white/8">Vercel Inc.</td>
                  <td className="p-2.5 align-top border-b border-white/8">PWA 웹 호스팅 및 배포 인프라 제공</td>
                </tr>
                <tr>
                  <td className="p-2.5 align-top">소셜 로그인 제공자(예: Google LLC, Kakao Corp. 등)</td>
                  <td className="p-2.5 align-top">소셜 로그인 인증 제공 및 동의 범위 내 프로필 정보 전달</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="my-0 mb-2.5 leading-[1.75]">
            수탁자 및 위탁 업무 내용이 변경되는 경우, 서비스 내 공지 등을 통해 안내합니다.
          </p>

          <h2 id="p7" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">7. 개인정보의 국외 이전</h2>
          <p className="my-0 mb-2.5 leading-[1.75]">
            서비스는 해외 클라우드 인프라를 이용하므로, 개인정보가 국외에서 보관·처리될 수 있습니다. 국외 이전에 관해서는 「개인정보 보호법」 등 관련 법령을 준수하며, 다음과 같이 처리합니다.
          </p>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li><strong>이전 받는 자</strong>: Supabase Inc., Vercel Inc. 등 서비스 인프라 제공 업체</li>
            <li><strong>이전 국가</strong>: 미국 등 서비스 인프라가 위치한 국가(예: Supabase/Vercel 미국 리전)</li>
            <li><strong>이전 일시 및 방법</strong>: 서비스 이용 시 네트워크를 통한 실시간 전송 및 저장</li>
            <li><strong>이전되는 항목</strong>: 계정 정보, 감정 기록, 게시글, 이미지, 로그 등 서비스 제공에 필요한 데이터</li>
            <li><strong>이용 목적</strong>: 서비스 제공 및 운영(인증, 데이터 저장, 배포 등)</li>
            <li><strong>보유 및 이용기간</strong>: 본 방침의 보유 기간 표에 따름</li>
          </ul>
          <div className="mt-3.5 p-3 rounded-[14px] border border-[rgba(101,199,166,.22)] bg-[rgba(101,199,166,.08)] text-sm">
            <strong>동의 안내</strong>
            <br />
            국외 이전은 회원가입 및 서비스 이용 과정에서 별도 고지·동의를 통해 진행됩니다. 이용자는 동의를 거부할 수 있으나, 이 경우 서비스 이용에 제한이 있을 수 있습니다.
          </div>

          <h2 id="p8" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">8. 이용자의 권리와 행사 방법</h2>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li>이용자는 언제든지 서비스 내 설정 메뉴 등을 통해 자신의 개인정보를 조회·수정할 수 있습니다.</li>
            <li>이용자는 회원 탈퇴 기능을 통해 계정을 삭제(탈퇴)할 수 있으며, 탈퇴 시 처리·보관은 본 방침 제4조에 따릅니다.</li>
            <li>이용자는 법령이 정한 바에 따라 서비스에 대해 본인의 개인정보에 대한 열람, 정정·삭제, 처리 정지, 동의 철회 등을 요청할 수 있습니다.</li>
            <li>위 권리를 행사하고자 하는 경우, 앱 내 문의 기능 또는 아래 제12조의 문의 이메일을 통해 요청할 수 있으며, 서비스는 법령이 정한 기한 내에 지체 없이 조치합니다.</li>
          </ul>

          <h2 id="p9" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">9. 개인정보의 파기</h2>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li>서비스는 보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다.</li>
            <li>전자적 파일 형태의 정보는 복구·재생이 불가능한 기술적 방법을 이용하여 삭제합니다.</li>
            <li>종이 문서 등은 파쇄 또는 소각 등의 방법으로 파기합니다.</li>
          </ul>

          <h2 id="p10" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">10. 개인정보의 안전성 확보 조치</h2>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li>접근 통제: 인증 기반 접근 제어, 역할·권한(RLS) 정책 적용 및 주기적 점검</li>
            <li>암호화: HTTPS 등 전송 구간 암호화 적용</li>
            <li>로그 및 모니터링: 오류·접속 로그 수집을 통한 장애 대응 및 보안 모니터링</li>
            <li>데이터 분리: user_id 기준 데이터 분리, Storage 경로 접근 제한 등 기술적 조치</li>
            <li>내부 관리: 최소 인원만 관리자 권한을 부여하고, 필요 시 내부 관리 방침 수립</li>
          </ul>

          <h2 id="p11" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">11. 쿠키 및 로그(접속기록) 처리</h2>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li>서비스는 로그인 유지 및 보안 강화를 위해 브라우저 쿠키 또는 로컬 스토리지 등에 세션 정보를 저장할 수 있습니다.</li>
            <li>서비스 품질 개선 및 보안 강화를 위해 접속기록, 오류 로그 등이 수집·분석될 수 있습니다.</li>
            <li>이용자가 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 일부 기능 이용에 제약이 발생할 수 있습니다.</li>
          </ul>

          <h2 id="p12" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">12. 개인정보 보호책임자 및 문의처</h2>
          <div className="overflow-hidden rounded-[14px] border border-white/12 bg-black/20 my-2.5 text-sm">
            <table className="w-full border-collapse border-separate border-spacing-0">
              <tbody>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">개인정보처리자</th>
                  <td className="p-2.5 align-top border-b border-white/8"><strong>마음,씨 서비스 운영자</strong></td>
                </tr>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">대표자</th>
                  <td className="p-2.5 align-top border-b border-white/8">이서아</td>
                </tr>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5 border-b border-white/8">주소</th>
                  <td className="p-2.5 align-top border-b border-white/8">(사업자 등록 전 개인 운영 단계에서는 주소를 공개하지 않을 수 있으며, 개인정보 관련 문의는 아래 이메일로 접수·처리됩니다.)</td>
                </tr>
                <tr>
                  <th className="w-60 text-left p-2.5 align-top bg-white/5">문의 이메일</th>
                  <td className="p-2.5 align-top"><a href="mailto:mamssi.official@gmail.com" className="text-[#e9f3ee] underline underline-offset-1 decoration-[rgba(101,199,166,.5)]">mamssi.official@gmail.com</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="my-0 mb-2.5 leading-[1.75]">
            이용자는 서비스를 이용하면서 발생하는 모든 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등에 대해 위 이메일로 문의할 수 있습니다.
          </p>

          <h2 id="p13" className="mt-[26px] mb-2 text-lg tracking-tight scroll-mt-[90px]">13. 개인정보처리방침의 변경</h2>
          <ul className="my-2 mb-3 pl-5 space-y-1.5">
            <li>본 개인정보처리방침은 관련 법령 및 서비스 정책에 따라 변경될 수 있습니다.</li>
            <li>중요한 내용 변경 시, 서비스는 변경 내용과 시행일자를 최소 7일 전에 서비스 내 공지사항 또는 알림을 통해 안내합니다.</li>
            <li>변경된 방침은 시행일자 이후에 수집·이용되는 개인정보에 대해 적용됩니다.</li>
          </ul>

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
