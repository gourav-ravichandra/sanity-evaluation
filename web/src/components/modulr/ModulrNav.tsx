'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

function LogoMark() {
  return (
    <svg viewBox="0 0 34 34" fill="none" aria-hidden>
      <rect x="0" y="0" width="15" height="15" rx="3" fill="#FFD524" />
      <rect x="19" y="0" width="15" height="15" rx="3" fill="#FFD524" />
      <rect x="0" y="19" width="15" height="15" rx="3" fill="#FFD524" opacity=".4" />
      <rect x="19" y="19" width="15" height="15" rx="3" fill="#FFD524" opacity=".7" />
    </svg>
  )
}

export function ModulrNav() {
  const pathname = usePathname()
  const resourcesActive =
    pathname === '/' || pathname?.startsWith('/resources') || pathname?.startsWith('/posts') || false

  return (
    <nav className="m-nav">
      <Link href="/" className="m-logo" aria-label="Modulr Resource Centre home">
        <div className="m-logo-mark">
          <LogoMark />
        </div>
        <span className="m-logo-word">Modulr</span>
      </Link>

      <ul className="m-nav-pills">
        <li>
          <Link href="/" className={resourcesActive ? 'active' : ''}>
            Resource Centre
          </Link>
          <div className="mega-menu">
            <div className="mega-inner">
              <div className="mega-section-label">Resource Centre</div>
              <div className="mega-grid">
                <Link href="/resources/insights" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Insights &amp; articles</strong>
                    <span>Blogs, guides and research</span>
                  </div>
                </Link>
                <Link href="/resources/customer-stories" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Customer stories</strong>
                    <span>Trusted by 6,000+ businesses</span>
                  </div>
                </Link>
                <Link href="/resources/whitepapers" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14H6a2 2 0 0 0 2 2h12" />
                      <path d="M8 7h8M8 11h5" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Whitepapers</strong>
                    <span>In-depth research and reports</span>
                  </div>
                </Link>
                <Link href="/resources/videos" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Videos</strong>
                    <span>Watch and learn</span>
                  </div>
                </Link>
                <Link href="/resources/demo-centre" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                      <path d="M9.5 10l2 2 3-3" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Demo centre</strong>
                    <span>See Modulr in action</span>
                  </div>
                </Link>
                <Link href="/resources/newsroom" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10l6 6v8a2 2 0 0 1-2 2z" />
                      <path d="M17 20v-8H7v8M7 4v4h8" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Newsroom</strong>
                    <span>News and media coverage</span>
                  </div>
                </Link>
              </div>
              <div className="mega-divider" />
              <div className="mega-section-label">More</div>
              <div className="mega-grid">
                <Link href="/resources/product-updates" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <polyline points="23 4 23 10 17 10" />
                      <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Product updates</strong>
                    <span>What&apos;s new in Modulr</span>
                  </div>
                </Link>
                <Link href="/resources/glossary" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Glossary</strong>
                    <span>Payments terms explained</span>
                  </div>
                </Link>
                <Link href="/resources/press-pack" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Press pack</strong>
                    <span>Logos, brand assets and bios</span>
                  </div>
                </Link>
                <Link href="/resources/blog" className="mega-item">
                  <div className="mega-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--lead)" strokeWidth="1.8" strokeLinecap="round">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                  <div className="mega-item-text">
                    <strong>Blog</strong>
                    <span>Latest thinking from Modulr</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  )
}
