import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div id="react-view">
        <div className="Page-amo">
          <header class="Header">
            <div class="Header-wrapper">
              <div class="Header-content">
                <a class="Header-title" href="https://addons.mozilla.org/en-US/firefox/"><span class="visually-hidden">Firefox Browser Add-ons</span></a>
              </div>
              <ul class="SectionLinks Header-SectionLinks">
                <li><a class="SectionLinks-link SectionLinks-link-extension SectionLinks-link--active" href="https://addons.mozilla.org/en-US/firefox/extensions/">Extensions</a></li>
                <li><a class="SectionLinks-link SectionLinks-link-theme" href="https://addons.mozilla.org/en-US/firefox/themes/">Themes</a></li>
                <li>
                  <div class="DropdownMenu SectionLinks-link SectionLinks-dropdown">
                    <button class="DropdownMenu-button" title="More…" type="button" aria-haspopup="true"><span class="DropdownMenu-button-text">More…</span><span class="Icon Icon-inverted-caret"></span></button>
                    <ul class="DropdownMenu-items" aria-hidden="true" aria-label="submenu">
                      <li class="DropdownMenuItem DropdownMenuItem-section SectionLinks-subheader">for Firefox</li>
                      <li class="DropdownMenuItem DropdownMenuItem-link"><a class="SectionLinks-dropdownlink" href="https://addons.mozilla.org/en-US/firefox/language-tools/">Dictionaries &amp; Language Packs</a></li>
                      <li class="DropdownMenuItem DropdownMenuItem-section SectionLinks-subheader">Other Browser Sites</li>
                      <li class="DropdownMenuItem DropdownMenuItem-link"><a class="SectionLinks-clientApp-android" data-clientapp="android" href="https://addons.mozilla.org/en-US/android/">Add-ons for Android</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
              <div class="Header-user-and-external-links">
                <a class="Header-blog-link Header-button" href="https://addons.mozilla.org/blog/">Firefox Add-ons Blog</a>
                <a
                  class="Header-extension-workshop-link Header-button"
                  title="Learn how to create extensions and themes"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://extensionworkshop.com/?utm_content=header-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org"
                >
                  Extension Workshop<span class="Icon Icon-external"></span>
                </a>
                <a class="Header-developer-hub-link Header-button" title="Submit and manage extensions and themes" target="_blank" rel="noopener noreferrer" href="https://addons.mozilla.org/en-US/developers/">
                  Developer Hub<span class="Icon Icon-external"></span>
                </a>
                <a class="Button Button--none Header-authenticate-button Header-button Button--micro" href="#login">Log in</a>
              </div>
              <form action="/en-US/firefox/search/" class="SearchForm Header-search-form Header-search-form--desktop" method="GET" data-no-csrf="true" role="search">
                <div class="AutoSearchInput">
                  <label class="AutoSearchInput-label visually-hidden" for="AutoSearchInput-q">Search</label>
                  <div class="AutoSearchInput-search-box">
                    <span class="Icon Icon-magnifying-glass AutoSearchInput-icon-magnifying-glass"></span>
                    <div role="combobox" aria-haspopup="listbox" aria-owns="react-autowhatever-1" aria-expanded="false">
                      <input
                        type="search"
                        autocomplete="off"
                        aria-autocomplete="list"
                        aria-controls="react-autowhatever-1"
                        class="AutoSearchInput-query"
                        id="AutoSearchInput-q"
                        maxlength="100"
                        minlength="2"
                        name="q"
                        placeholder="Find add-ons"
                      />
                      <div id="react-autowhatever-1" role="listbox"></div>
                    </div>
                    <button class="AutoSearchInput-submit-button" type="submit"><span class="visually-hidden">Search</span><span class="Icon Icon-arrow"></span></button>
                  </div>
                </div>
              </form>
            </div>
          </header>
          <div class="Page-content">
                    <div class="Page Page-not-homepage">
                        <div class="AppBanner"></div>
                        <div class="Addon Addon-extension" data-site-identifier="2657087">
                            <div class="Addon-header-wrapper">
                                <section class="Card Addon-header-info-card Card--photon Card--no-header Card--no-footer">
                                    <div class="Card-contents">
                                        <header class="Addon-header">
                                            <div class="Addon-icon">
                                                <div class="Addon-icon-wrapper">
                                                    <img class="Addon-icon-image" src="Binance/2657087-64.png" alt="Preview of Binance Wallet" />
                                                </div>
                                            </div>
                                            <h1 class="AddonTitle">
                                                Binance Wallet<span class="AddonTitle-author"> by <a href="https://addons.mozilla.org/en-US/firefox/user/16974369/">Binance Chain</a></span>
                                            </h1>
                                            <div class="AddonBadges">
                                                <div class="Badge Badge-experimental">
                                                    <span class="Icon Icon-experimental-badge"><span class="visually-hidden">Experimental</span></span>Experimental
                                                </div>
                                            </div>
                                            <div class="Notice Notice-genericWarning InstallWarning">
                                                <div class="Notice-icon"></div>
                                                <div class="Notice-column">
                                                    <div class="Notice-content">
                                                        <p class="Notice-text">This add-on is not actively monitored for security by Mozilla. Make sure you trust it before installing.</p>
                                                        <a
                                                            class="Button Button--none Notice-button Button--micro"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            href="https://support.mozilla.org/kb/add-on-badges?utm_content=install-warning&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org"
                                                        >
                                                            Learn more
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="Addon-summary-and-install-button-wrapper">
                                                <p class="Addon-summary">A Crypto Wallet for Binance Chain, Binance Smart Chain and Ethereum</p>
                                                <div class="InstallButtonWrapper">
                                                    <div class="AMInstallButton AMInstallButton--noDownloadLink">
                                                        <Link to={{ pathname: '/wallet' }}><a class="Button Button--action AMInstallButton-button Button--puffy" href="https://addons.mozilla.org/firefox/downloads/file/3938276/binance_chain-2.13.0.xpi">Add to Firefox</a></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 class="visually-hidden">Extension Metadata</h2>
                                        </header>
                                    </div>
                                </section>
                                <section class="Card Addon-header-meta-and-ratings Card--photon Card--no-header Card--no-footer">
                                    <div class="Card-contents">
                                        <div class="AddonMeta">
                                            <h3 class="visually-hidden">Used by</h3>
                                            <div class="MetadataCard AddonMeta-overallRating">
                                                <dl class="MetadataCard-list">
                                                    <dd class="MetadataCard-content">37,202</dd>
                                                    <dt class="MetadataCard-title">Users</dt>
                                                </dl>
                                                <dl class="MetadataCard-list">
                                                    <dd class="MetadataCard-content"><a class="AddonMeta-reviews-content-link" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/reviews/">365</a></dd>
                                                    <dt class="MetadataCard-title"><a class="AddonMeta-reviews-title-link" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/reviews/">Reviews</a></dt>
                                                </dl>
                                                <dl class="MetadataCard-list">
                                                    <dd class="MetadataCard-content">
                                                        <div class="AddonMeta-rating-content">
                                                            <div class="Rating Rating--small" title="Rated 4.1 out of 5">
                                                                <div class="Rating-star Rating-rating-1 Rating-selected-star" title="Rated 4.1 out of 5">
                                                                    <span class="Icon Icon-inline-content IconStar">
                                                                        <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                            <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                <path
                                                                                    d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                ></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="Rating-star Rating-rating-2 Rating-selected-star" title="Rated 4.1 out of 5">
                                                                    <span class="Icon Icon-inline-content IconStar">
                                                                        <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                            <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                <path
                                                                                    d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                ></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="Rating-star Rating-rating-3 Rating-selected-star" title="Rated 4.1 out of 5">
                                                                    <span class="Icon Icon-inline-content IconStar">
                                                                        <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                            <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                <path
                                                                                    d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                ></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="Rating-star Rating-rating-4 Rating-selected-star" title="Rated 4.1 out of 5">
                                                                    <span class="Icon Icon-inline-content IconStar">
                                                                        <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                            <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                <path
                                                                                    d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                ></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <div class="Rating-star Rating-rating-5" title="Rated 4.1 out of 5">
                                                                    <span class="Icon Icon-inline-content IconStar">
                                                                        <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                            <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="0.25">
                                                                                <path
                                                                                    d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                ></path>
                                                                            </g>
                                                                        </svg>
                                                                    </span>
                                                                </div>
                                                                <span class="visually-hidden">Rated 4.1 out of 5</span>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                    <dt class="MetadataCard-title"><div class="AddonMeta-rating-title">4.1 Stars</div></dt>
                                                </dl>
                                            </div>
                                            <div class="RatingsByStar">
                                                <div class="RatingsByStar-graph">
                                                    <a class="RatingsByStar-row" title="Read all 246 five-star reviews" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/reviews/?score=5">
                                                        <div class="RatingsByStar-star">
                                                            5
                                                            <span class="Icon Icon-inline-content IconStar">
                                                                <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                    <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                        <path
                                                                            d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="RatingsByStar-barContainer">
                                                            <div class="RatingsByStar-bar RatingsByStar-barFrame"><div class="RatingsByStar-bar RatingsByStar-barValue RatingsByStar-barValue--67pct RatingsByStar-partialBar"></div></div>
                                                        </div>
                                                        <div class="RatingsByStar-count">246</div>
                                                    </a>
                                                    <a class="RatingsByStar-row" title="Read all 25 four-star reviews" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/reviews/?score=4">
                                                        <div class="RatingsByStar-star">
                                                            4
                                                            <span class="Icon Icon-inline-content IconStar">
                                                                <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                    <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                        <path
                                                                            d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="RatingsByStar-barContainer">
                                                            <div class="RatingsByStar-bar RatingsByStar-barFrame"><div class="RatingsByStar-bar RatingsByStar-barValue RatingsByStar-barValue--7pct RatingsByStar-partialBar"></div></div>
                                                        </div>
                                                        <div class="RatingsByStar-count">25</div>
                                                    </a>
                                                    <a class="RatingsByStar-row" title="Read all 31 three-star reviews" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/reviews/?score=3">
                                                        <div class="RatingsByStar-star">
                                                            3
                                                            <span class="Icon Icon-inline-content IconStar">
                                                                <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                    <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                        <path
                                                                            d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="RatingsByStar-barContainer">
                                                            <div class="RatingsByStar-bar RatingsByStar-barFrame"><div class="RatingsByStar-bar RatingsByStar-barValue RatingsByStar-barValue--8pct RatingsByStar-partialBar"></div></div>
                                                        </div>
                                                        <div class="RatingsByStar-count">31</div>
                                                    </a>
                                                    <a class="RatingsByStar-row" title="Read all 8 two-star reviews" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/reviews/?score=2">
                                                        <div class="RatingsByStar-star">
                                                            2
                                                            <span class="Icon Icon-inline-content IconStar">
                                                                <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                    <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                        <path
                                                                            d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="RatingsByStar-barContainer">
                                                            <div class="RatingsByStar-bar RatingsByStar-barFrame"><div class="RatingsByStar-bar RatingsByStar-barValue RatingsByStar-barValue--2pct RatingsByStar-partialBar"></div></div>
                                                        </div>
                                                        <div class="RatingsByStar-count">8</div>
                                                    </a>
                                                    <a class="RatingsByStar-row" title="Read all 55 one-star reviews" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/reviews/?score=1">
                                                        <div class="RatingsByStar-star">
                                                            1
                                                            <span class="Icon Icon-inline-content IconStar">
                                                                <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                    <g fill="#ffe900" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                        <path
                                                                            d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                        ></path>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </div>
                                                        <div class="RatingsByStar-barContainer">
                                                            <div class="RatingsByStar-bar RatingsByStar-barFrame"><div class="RatingsByStar-bar RatingsByStar-barValue RatingsByStar-barValue--15pct RatingsByStar-partialBar"></div></div>
                                                        </div>
                                                        <div class="RatingsByStar-count">55</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="Addon-details">
                                <div class="Addon-main-content">
                                    <section class="Card Addon-screenshots Card--no-footer">
                                        <header class="Card-header"><div class="Card-header-text">Screenshots</div></header>
                                        <div class="Card-contents">
                                            <div class="ScreenShots">
                                                <div class="ScreenShots-viewport">
                                                    <div class="ScreenShots-list">
                                                        <img class="ScreenShots-image" src="Binance/243080.jpg" width="533" height="333" />
                                                        <img class="ScreenShots-image" src="Binance/243148.jpg" width="533" height="333" />
                                                        <img class="ScreenShots-image" src="Binance/243149.jpg" width="533" height="333" />
                                                        <img class="ScreenShots-image" src="Binance/243150.jpg" width="533" height="333" />
                                                        <img class="ScreenShots-image" src="Binance/243151.jpg" width="533" height="333" />
                                                        <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                                                            <div class="pswp__bg"></div>
                                                            <div class="pswp__scroll-wrap">
                                                                <div class="pswp__container">
                                                                    <div class="pswp__item"></div>
                                                                    <div class="pswp__item"></div>
                                                                    <div class="pswp__item"></div>
                                                                </div>
                                                                <div class="pswp__ui pswp__ui--hidden">
                                                                    <div class="pswp__top-bar">
                                                                        <div class="pswp__counter"></div>
                                                                        <button type="button" class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                                                                        <button type="button" class="pswp__button pswp__button--share" title="Share"></button>
                                                                        <button type="button" class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                                                                        <button type="button" class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                                                                        <div class="pswp__preloader">
                                                                            <div class="pswp__preloader__icn">
                                                                                <div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div></div>
                                                                    <button type="button" class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                                                                    <button type="button" class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                                                                    <div class="pswp__caption"><div class="pswp__caption__center"></div></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="Card ShowMoreCard AddonDescription">
                                        <header class="Card-header"><div class="Card-header-text">About this extension</div></header>
                                        <div class="Card-contents">
                                            <div class="ShowMoreCard-contents">
                                                <div class="AddonDescription-contents">
                                                    A Crypto Wallet for Binance Chain, Binance Smart Chain and Ethereum<br />
                                                    <br />
                                                    With the Binance Chain browser extension you can send and receive funds on Binance Chain, Binance Smart Chain and Ethereum, and cross-chain transfers between both of Binance’s blockchains.
                                                    <br />
                                                    <br />
                                                    The extension can also integrate with other Binance Chain products for authentication and transaction signing without providing access to your private keys, which are stored securely
                                                    within the extension’s storage space and encrypted with your password.<br />
                                                    <br />
                                                    To make this integration possible, the extension needs to add code to handle the communication between web apps you open in your tabs and the extension itself. This is why the extension
                                                    requires the permission to access any webpage.
                                                </div>
                                            </div>
                                        </div>
                                        <footer class="Card-footer Card-footer-link">
                                            <a aria-label="Expand to read more" class="ShowMoreCard-expand-link" href="#show-more"><span class="visually-hidden">Expand to</span> Read more</a>
                                        </footer>
                                    </section>
                                    <section class="Card CardList AddonsCard AddonRecommendations AddonsCard--horizontal Card--photon Card--no-footer">
                                        <header class="Card-header"><div class="Card-header-text">Other popular extensions</div></header>
                                        <div class="Card-contents">
                                            <ul class="AddonsCard-list">
                                                <li class="SearchResult">
                                                    <div class="SearchResult-wrapper">
                                                        <div class="SearchResult-result">
                                                            <div class="SearchResult-icon-wrapper">
                                                                <img
                                                                    class="SearchResult-icon"
                                                                    src="Binance/626810-64.png"
                                                                    alt="New Tab Override"
                                                                />
                                                            </div>
                                                            <div class="SearchResult-contents">
                                                                <h2 class="SearchResult-name">
                                                                    <a
                                                                        class="SearchResult-link"
                                                                        href="https://addons.mozilla.org/en-US/firefox/addon/new-tab-override/?utm_source=addons.mozilla.org&amp;utm_medium=referral&amp;utm_content=recommended_fallback"
                                                                    >
                                                                        New Tab Override
                                                                    </a>
                                                                    <div class="PromotedBadge PromotedBadge--recommended PromotedBadge-small">
                                                                        <a
                                                                            class="PromotedBadge-link PromotedBadge-link--recommended"
                                                                            href="https://support.mozilla.org/kb/add-on-badges?utm_content=promoted-addon-badge&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org"
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                            title="Firefox only recommends add-ons that meet our standards for security and performance."
                                                                        >
                                                                            <span class="Icon Icon-inline-content IconPromotedBadge IconPromotedBadge-small">
                                                                                <svg class="IconPromotedBadge-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                    <circle class="IconPromotedBadge-circle-bgColor--recommended" cx="50%" cy="50%" r="50%"></circle>
                                                                                    <g fill-rule="nonzero">
                                                                                        <path
                                                                                            class="IconPromotedBadge-iconPath IconPromotedBadge-iconPath--recommended"
                                                                                            d="M15.449999809265137,3.999999523162842 H4.550000190734863 C4.25,3.999999523162842 4,4.219999313354492 4,4.499999523162842 V6.999999523162842 c0,1.100000023841858 0.9800000190734863,2 2.180000066757202,2 h0.05000000074505806 a3.6700000762939453,3.6700000762939453 0 0 0 3.2200000286102295,2.9600000381469727 V13.499999523162842 h1.100000023841858 V11.959999561309814 A3.6700000762939453,3.6700000762939453 0 0 0 13.770000457763672,8.999999523162842 h0.05000000074505806 C15.020000457763672,8.999999523162842 16,8.099998950958252 16,6.999999523162842 V4.499999523162842 c0,-0.2800000011920929 -0.23999999463558197,-0.5 -0.550000011920929,-0.5 zM5.099999904632568,6.999999523162842 V4.999999523162842 h1.100000023841858 v3 c-0.6100000143051147,0 -1.100000023841858,-0.44999998807907104 -1.100000023841858,-1 zm9.819999694824219,0 c0,0.550000011920929 -0.49000000953674316,1 -1.100000023841858,1 V4.999999523162842 h1.100000023841858 v2 zM11.100000381469727,13.999999523162842 H8.899999618530273 c-2.7200000286102295,0 -2.7200000286102295,2 -2.7200000286102295,2 h7.639999866485596 s0,-2 -2.7300000190734863,-2 z"
                                                                                        ></path>
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                                            <span class="PromotedBadge-label PromotedBadge-label--recommended">Recommended</span>
                                                                        </a>
                                                                    </div>
                                                                </h2>
                                                                <div class="SearchResult-metadata">
                                                                    <div class="SearchResult-rating">
                                                                        <div class="Rating Rating--small" title="Rated 4.3 out of 5">
                                                                            <div class="Rating-star Rating-rating-1 Rating-selected-star" title="Rated 4.3 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-2 Rating-selected-star" title="Rated 4.3 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-3 Rating-selected-star" title="Rated 4.3 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-4 Rating-selected-star" title="Rated 4.3 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-5 Rating-half-star" title="Rated 4.3 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <defs>
                                                                                            <linearGradient id="halfb143e2ed-2419-4889-a739-a7cfe1a57516" x1="0" x2="100%" y1="0" y2="0">
                                                                                                <stop offset="50%" stop-color="#737373"></stop>
                                                                                                <stop offset="50%" stop-color="#737373" stop-opacity="0.25"></stop>
                                                                                            </linearGradient>
                                                                                        </defs>
                                                                                        <g fill="url(#halfb143e2ed-2419-4889-a739-a7cfe1a57516)" fill-rule="nonzero" transform="scale(3.75) translate(-1200.000000, -191.000000)">
                                                                                            <path
                                                                                                d="M1216.67559,197.013479 C1216.54115,196.628667 1216.19883,196.344304 1215.78203,196.271203 L1211.45804,195.530952 L1209.42135,191.617039 C1209.22458,191.238958 1208.8214,191 1208.38027,191 C1207.93914,191 1207.53597,191.238958 1207.33919,191.617039 L1205.30145,195.530952 L1200.98592,196.269177 C1200.56542,196.339521 1200.21894,196.624766 1200.08323,197.012329 C1199.94751,197.399891 1200.04437,197.827503 1200.33557,198.126387 L1203.43079,201.313214 L1202.78679,205.728392 C1202.72624,206.141968 1202.91235,206.553231 1203.26889,206.793722 C1203.62542,207.034213 1204.09248,207.063526 1204.47874,206.869654 L1208.37974,204.921305 L1212.28181,206.872692 C1212.66807,207.066564 1213.13512,207.037251 1213.49166,206.79676 C1213.84819,206.556269 1214.0343,206.145006 1213.97376,205.73143 L1213.3287,201.313214 L1216.42286,198.1274 C1216.71414,197.828621 1216.81115,197.401068 1216.67559,197.013479 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <span class="visually-hidden">Rated 4.3 out of 5</span>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="SearchResult-author SearchResult--meta-section">Sören Hentzschel</h3>
                                                                </div>
                                                            </div>
                                                            <h3 class="SearchResult-users SearchResult--meta-section">
                                                                <span class="Icon Icon-user-fill SearchResult-users-icon"></span><span class="SearchResult-users-text">68,745 users</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="SearchResult">
                                                    <div class="SearchResult-wrapper">
                                                        <div class="SearchResult-result">
                                                            <div class="SearchResult-icon-wrapper">
                                                                <img class="SearchResult-icon" src="Binance/824288-64.png" alt="Search by Image" />
                                                            </div>
                                                            <div class="SearchResult-contents">
                                                                <h2 class="SearchResult-name">
                                                                    <a
                                                                        class="SearchResult-link"
                                                                        href="https://addons.mozilla.org/en-US/firefox/addon/search_by_image/?utm_source=addons.mozilla.org&amp;utm_medium=referral&amp;utm_content=recommended_fallback"
                                                                    >
                                                                        Search by Image
                                                                    </a>
                                                                    <div class="PromotedBadge PromotedBadge--recommended PromotedBadge-small">
                                                                        <a
                                                                            class="PromotedBadge-link PromotedBadge-link--recommended"
                                                                            href="https://support.mozilla.org/kb/add-on-badges?utm_content=promoted-addon-badge&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org"
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                            title="Firefox only recommends add-ons that meet our standards for security and performance."
                                                                        >
                                                                            <span class="Icon Icon-inline-content IconPromotedBadge IconPromotedBadge-small">
                                                                                <svg class="IconPromotedBadge-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                    <circle class="IconPromotedBadge-circle-bgColor--recommended" cx="50%" cy="50%" r="50%"></circle>
                                                                                    <g fill-rule="nonzero">
                                                                                        <path
                                                                                            class="IconPromotedBadge-iconPath IconPromotedBadge-iconPath--recommended"
                                                                                            d="M15.449999809265137,3.999999523162842 H4.550000190734863 C4.25,3.999999523162842 4,4.219999313354492 4,4.499999523162842 V6.999999523162842 c0,1.100000023841858 0.9800000190734863,2 2.180000066757202,2 h0.05000000074505806 a3.6700000762939453,3.6700000762939453 0 0 0 3.2200000286102295,2.9600000381469727 V13.499999523162842 h1.100000023841858 V11.959999561309814 A3.6700000762939453,3.6700000762939453 0 0 0 13.770000457763672,8.999999523162842 h0.05000000074505806 C15.020000457763672,8.999999523162842 16,8.099998950958252 16,6.999999523162842 V4.499999523162842 c0,-0.2800000011920929 -0.23999999463558197,-0.5 -0.550000011920929,-0.5 zM5.099999904632568,6.999999523162842 V4.999999523162842 h1.100000023841858 v3 c-0.6100000143051147,0 -1.100000023841858,-0.44999998807907104 -1.100000023841858,-1 zm9.819999694824219,0 c0,0.550000011920929 -0.49000000953674316,1 -1.100000023841858,1 V4.999999523162842 h1.100000023841858 v2 zM11.100000381469727,13.999999523162842 H8.899999618530273 c-2.7200000286102295,0 -2.7200000286102295,2 -2.7200000286102295,2 h7.639999866485596 s0,-2 -2.7300000190734863,-2 z"
                                                                                        ></path>
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                                            <span class="PromotedBadge-label PromotedBadge-label--recommended">Recommended</span>
                                                                        </a>
                                                                    </div>
                                                                </h2>
                                                                <div class="SearchResult-metadata">
                                                                    <div class="SearchResult-rating">
                                                                        <div class="Rating Rating--small" title="Rated 4.6 out of 5">
                                                                            <div class="Rating-star Rating-rating-1 Rating-selected-star" title="Rated 4.6 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-2 Rating-selected-star" title="Rated 4.6 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-3 Rating-selected-star" title="Rated 4.6 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-4 Rating-selected-star" title="Rated 4.6 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-5 Rating-half-star" title="Rated 4.6 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <defs>
                                                                                            <linearGradient id="halfc017f936-c545-4383-81a7-1e13614271a1" x1="0" x2="100%" y1="0" y2="0">
                                                                                                <stop offset="50%" stop-color="#737373"></stop>
                                                                                                <stop offset="50%" stop-color="#737373" stop-opacity="0.25"></stop>
                                                                                            </linearGradient>
                                                                                        </defs>
                                                                                        <g fill="url(#halfc017f936-c545-4383-81a7-1e13614271a1)" fill-rule="nonzero" transform="scale(3.75) translate(-1200.000000, -191.000000)">
                                                                                            <path
                                                                                                d="M1216.67559,197.013479 C1216.54115,196.628667 1216.19883,196.344304 1215.78203,196.271203 L1211.45804,195.530952 L1209.42135,191.617039 C1209.22458,191.238958 1208.8214,191 1208.38027,191 C1207.93914,191 1207.53597,191.238958 1207.33919,191.617039 L1205.30145,195.530952 L1200.98592,196.269177 C1200.56542,196.339521 1200.21894,196.624766 1200.08323,197.012329 C1199.94751,197.399891 1200.04437,197.827503 1200.33557,198.126387 L1203.43079,201.313214 L1202.78679,205.728392 C1202.72624,206.141968 1202.91235,206.553231 1203.26889,206.793722 C1203.62542,207.034213 1204.09248,207.063526 1204.47874,206.869654 L1208.37974,204.921305 L1212.28181,206.872692 C1212.66807,207.066564 1213.13512,207.037251 1213.49166,206.79676 C1213.84819,206.556269 1214.0343,206.145006 1213.97376,205.73143 L1213.3287,201.313214 L1216.42286,198.1274 C1216.71414,197.828621 1216.81115,197.401068 1216.67559,197.013479 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <span class="visually-hidden">Rated 4.6 out of 5</span>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="SearchResult-author SearchResult--meta-section">Armin Sebastian</h3>
                                                                </div>
                                                            </div>
                                                            <h3 class="SearchResult-users SearchResult--meta-section">
                                                                <span class="Icon Icon-user-fill SearchResult-users-icon"></span><span class="SearchResult-users-text">204,843 users</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="SearchResult">
                                                    <div class="SearchResult-wrapper">
                                                        <div class="SearchResult-result">
                                                            <div class="SearchResult-icon-wrapper">
                                                                <img class="SearchResult-icon" src="Binance/607454-64.png" alt="uBlock Origin" />
                                                            </div>
                                                            <div class="SearchResult-contents">
                                                                <h2 class="SearchResult-name">
                                                                    <a
                                                                        class="SearchResult-link"
                                                                        href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?utm_source=addons.mozilla.org&amp;utm_medium=referral&amp;utm_content=recommended_fallback"
                                                                    >
                                                                        uBlock Origin
                                                                    </a>
                                                                    <div class="PromotedBadge PromotedBadge--recommended PromotedBadge-small">
                                                                        <a
                                                                            class="PromotedBadge-link PromotedBadge-link--recommended"
                                                                            href="https://support.mozilla.org/kb/add-on-badges?utm_content=promoted-addon-badge&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org"
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                            title="Firefox only recommends add-ons that meet our standards for security and performance."
                                                                        >
                                                                            <span class="Icon Icon-inline-content IconPromotedBadge IconPromotedBadge-small">
                                                                                <svg class="IconPromotedBadge-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                    <circle class="IconPromotedBadge-circle-bgColor--recommended" cx="50%" cy="50%" r="50%"></circle>
                                                                                    <g fill-rule="nonzero">
                                                                                        <path
                                                                                            class="IconPromotedBadge-iconPath IconPromotedBadge-iconPath--recommended"
                                                                                            d="M15.449999809265137,3.999999523162842 H4.550000190734863 C4.25,3.999999523162842 4,4.219999313354492 4,4.499999523162842 V6.999999523162842 c0,1.100000023841858 0.9800000190734863,2 2.180000066757202,2 h0.05000000074505806 a3.6700000762939453,3.6700000762939453 0 0 0 3.2200000286102295,2.9600000381469727 V13.499999523162842 h1.100000023841858 V11.959999561309814 A3.6700000762939453,3.6700000762939453 0 0 0 13.770000457763672,8.999999523162842 h0.05000000074505806 C15.020000457763672,8.999999523162842 16,8.099998950958252 16,6.999999523162842 V4.499999523162842 c0,-0.2800000011920929 -0.23999999463558197,-0.5 -0.550000011920929,-0.5 zM5.099999904632568,6.999999523162842 V4.999999523162842 h1.100000023841858 v3 c-0.6100000143051147,0 -1.100000023841858,-0.44999998807907104 -1.100000023841858,-1 zm9.819999694824219,0 c0,0.550000011920929 -0.49000000953674316,1 -1.100000023841858,1 V4.999999523162842 h1.100000023841858 v2 zM11.100000381469727,13.999999523162842 H8.899999618530273 c-2.7200000286102295,0 -2.7200000286102295,2 -2.7200000286102295,2 h7.639999866485596 s0,-2 -2.7300000190734863,-2 z"
                                                                                        ></path>
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                                            <span class="PromotedBadge-label PromotedBadge-label--recommended">Recommended</span>
                                                                        </a>
                                                                    </div>
                                                                </h2>
                                                                <div class="SearchResult-metadata">
                                                                    <div class="SearchResult-rating">
                                                                        <div class="Rating Rating--small" title="Rated 4.8 out of 5">
                                                                            <div class="Rating-star Rating-rating-1 Rating-selected-star" title="Rated 4.8 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-2 Rating-selected-star" title="Rated 4.8 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-3 Rating-selected-star" title="Rated 4.8 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-4 Rating-selected-star" title="Rated 4.8 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-5 Rating-selected-star" title="Rated 4.8 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <span class="visually-hidden">Rated 4.8 out of 5</span>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="SearchResult-author SearchResult--meta-section">Raymond Hill</h3>
                                                                </div>
                                                            </div>
                                                            <h3 class="SearchResult-users SearchResult--meta-section">
                                                                <span class="Icon Icon-user-fill SearchResult-users-icon"></span><span class="SearchResult-users-text">5,455,689 users</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="SearchResult">
                                                    <div class="SearchResult-wrapper">
                                                        <div class="SearchResult-result">
                                                            <div class="SearchResult-icon-wrapper">
                                                                <img
                                                                    class="SearchResult-icon"
                                                                    src="Binance/700308-64.png"
                                                                    alt="Enhancer for YouTube™"
                                                                />
                                                            </div>
                                                            <div class="SearchResult-contents">
                                                                <h2 class="SearchResult-name">
                                                                    <a
                                                                        class="SearchResult-link"
                                                                        href="https://addons.mozilla.org/en-US/firefox/addon/enhancer-for-youtube/?utm_source=addons.mozilla.org&amp;utm_medium=referral&amp;utm_content=recommended_fallback"
                                                                    >
                                                                        Enhancer for YouTube™
                                                                    </a>
                                                                    <div class="PromotedBadge PromotedBadge--recommended PromotedBadge-small">
                                                                        <a
                                                                            class="PromotedBadge-link PromotedBadge-link--recommended"
                                                                            href="https://support.mozilla.org/kb/add-on-badges?utm_content=promoted-addon-badge&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org"
                                                                            rel="noopener noreferrer"
                                                                            target="_blank"
                                                                            title="Firefox only recommends add-ons that meet our standards for security and performance."
                                                                        >
                                                                            <span class="Icon Icon-inline-content IconPromotedBadge IconPromotedBadge-small">
                                                                                <svg class="IconPromotedBadge-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                    <circle class="IconPromotedBadge-circle-bgColor--recommended" cx="50%" cy="50%" r="50%"></circle>
                                                                                    <g fill-rule="nonzero">
                                                                                        <path
                                                                                            class="IconPromotedBadge-iconPath IconPromotedBadge-iconPath--recommended"
                                                                                            d="M15.449999809265137,3.999999523162842 H4.550000190734863 C4.25,3.999999523162842 4,4.219999313354492 4,4.499999523162842 V6.999999523162842 c0,1.100000023841858 0.9800000190734863,2 2.180000066757202,2 h0.05000000074505806 a3.6700000762939453,3.6700000762939453 0 0 0 3.2200000286102295,2.9600000381469727 V13.499999523162842 h1.100000023841858 V11.959999561309814 A3.6700000762939453,3.6700000762939453 0 0 0 13.770000457763672,8.999999523162842 h0.05000000074505806 C15.020000457763672,8.999999523162842 16,8.099998950958252 16,6.999999523162842 V4.499999523162842 c0,-0.2800000011920929 -0.23999999463558197,-0.5 -0.550000011920929,-0.5 zM5.099999904632568,6.999999523162842 V4.999999523162842 h1.100000023841858 v3 c-0.6100000143051147,0 -1.100000023841858,-0.44999998807907104 -1.100000023841858,-1 zm9.819999694824219,0 c0,0.550000011920929 -0.49000000953674316,1 -1.100000023841858,1 V4.999999523162842 h1.100000023841858 v2 zM11.100000381469727,13.999999523162842 H8.899999618530273 c-2.7200000286102295,0 -2.7200000286102295,2 -2.7200000286102295,2 h7.639999866485596 s0,-2 -2.7300000190734863,-2 z"
                                                                                        ></path>
                                                                                    </g>
                                                                                </svg>
                                                                            </span>
                                                                            <span class="PromotedBadge-label PromotedBadge-label--recommended">Recommended</span>
                                                                        </a>
                                                                    </div>
                                                                </h2>
                                                                <div class="SearchResult-metadata">
                                                                    <div class="SearchResult-rating">
                                                                        <div class="Rating Rating--small" title="Rated 4.7 out of 5">
                                                                            <div class="Rating-star Rating-rating-1 Rating-selected-star" title="Rated 4.7 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-2 Rating-selected-star" title="Rated 4.7 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-3 Rating-selected-star" title="Rated 4.7 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-4 Rating-selected-star" title="Rated 4.7 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="1">
                                                                                            <path
                                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <div class="Rating-star Rating-rating-5 Rating-half-star" title="Rated 4.7 out of 5">
                                                                                <span class="Icon Icon-inline-content IconStar">
                                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                                        <defs>
                                                                                            <linearGradient id="half3f87cd0d-7978-4f66-aa7a-ccd0577e831e" x1="0" x2="100%" y1="0" y2="0">
                                                                                                <stop offset="50%" stop-color="#737373"></stop>
                                                                                                <stop offset="50%" stop-color="#737373" stop-opacity="0.25"></stop>
                                                                                            </linearGradient>
                                                                                        </defs>
                                                                                        <g fill="url(#half3f87cd0d-7978-4f66-aa7a-ccd0577e831e)" fill-rule="nonzero" transform="scale(3.75) translate(-1200.000000, -191.000000)">
                                                                                            <path
                                                                                                d="M1216.67559,197.013479 C1216.54115,196.628667 1216.19883,196.344304 1215.78203,196.271203 L1211.45804,195.530952 L1209.42135,191.617039 C1209.22458,191.238958 1208.8214,191 1208.38027,191 C1207.93914,191 1207.53597,191.238958 1207.33919,191.617039 L1205.30145,195.530952 L1200.98592,196.269177 C1200.56542,196.339521 1200.21894,196.624766 1200.08323,197.012329 C1199.94751,197.399891 1200.04437,197.827503 1200.33557,198.126387 L1203.43079,201.313214 L1202.78679,205.728392 C1202.72624,206.141968 1202.91235,206.553231 1203.26889,206.793722 C1203.62542,207.034213 1204.09248,207.063526 1204.47874,206.869654 L1208.37974,204.921305 L1212.28181,206.872692 C1212.66807,207.066564 1213.13512,207.037251 1213.49166,206.79676 C1213.84819,206.556269 1214.0343,206.145006 1213.97376,205.73143 L1213.3287,201.313214 L1216.42286,198.1274 C1216.71414,197.828621 1216.81115,197.401068 1216.67559,197.013479 Z"
                                                                                            ></path>
                                                                                        </g>
                                                                                    </svg>
                                                                                </span>
                                                                            </div>
                                                                            <span class="visually-hidden">Rated 4.7 out of 5</span>
                                                                        </div>
                                                                    </div>
                                                                    <h3 class="SearchResult-author SearchResult--meta-section">Maxime RF</h3>
                                                                </div>
                                                            </div>
                                                            <h3 class="SearchResult-users SearchResult--meta-section">
                                                                <span class="Icon Icon-user-fill SearchResult-users-icon"></span><span class="SearchResult-users-text">662,593 users</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                                </div>
                                <section class="Card Addon-overall-rating">
                                    <header class="Card-header"><div class="Card-header-text">Rate your experience</div></header>
                                    <div class="Card-contents">
                                        <div class="RatingManager">
                                            <form action="">
                                                <fieldset>
                                                    <legend class="RatingManager-legend">How are you enjoying <b>Binance Wallet</b>?</legend>
                                                    <div class="RatingManager-ratingControl">
                                                        <a class="Button Button--action RatingManager-log-in-to-rate-button Button--micro" href="#login">Log in to rate this extension</a>
                                                        <div class="Rating Rating--large RatingManager-UserRating" title="There are no ratings yet">
                                                            <div class="Rating-star Rating-rating-1" title="There are no ratings yet">
                                                                <span class="Icon Icon-inline-content IconStar">
                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="0.25">
                                                                            <path
                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <div class="Rating-star Rating-rating-2" title="There are no ratings yet">
                                                                <span class="Icon Icon-inline-content IconStar">
                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="0.25">
                                                                            <path
                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <div class="Rating-star Rating-rating-3" title="There are no ratings yet">
                                                                <span class="Icon Icon-inline-content IconStar">
                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="0.25">
                                                                            <path
                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <div class="Rating-star Rating-rating-4" title="There are no ratings yet">
                                                                <span class="Icon Icon-inline-content IconStar">
                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="0.25">
                                                                            <path
                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <div class="Rating-star Rating-rating-5" title="There are no ratings yet">
                                                                <span class="Icon Icon-inline-content IconStar">
                                                                    <svg viewBox="0 0 64 64" class="IconStar-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                                        <g fill="#737373" fill-rule="nonzero" transform="translate(-140.000000, -607.000000)" fill-opacity="0.25">
                                                                            <path
                                                                                d="M154.994575,670.99995 C153.704598,671.000763 152.477615,670.442079 151.630967,669.468394 C150.784319,668.49471 150.401158,667.201652 150.580582,665.923653 L153.046749,648.259919 L141.193762,635.514481 C140.080773,634.318044 139.711733,632.608076 140.232152,631.058811 C140.752571,629.509546 142.078939,628.369589 143.688275,628.088421 L160.214424,625.130961 L168.013827,609.468577 C168.767364,607.955994 170.3113,607 172.000594,607 C173.689888,607 175.233824,607.955994 175.98736,609.468577 L183.790813,625.130961 L200.329111,628.08437 C201.934946,628.371492 203.25546,629.513805 203.771316,631.062053 C204.287172,632.610301 203.915846,634.316807 202.803377,635.51043 L190.954439,648.26397 L193.420606,665.923653 C193.652457,667.578241 192.93975,669.223573 191.574418,670.185702 C190.209085,671.147831 188.420524,671.265104 186.941351,670.489485 L172.002619,662.698806 L157.047688,670.50569 C156.413201,670.833752 155.708782,671.003331 154.994575,670.99995 Z"
                                                                            ></path>
                                                                        </g>
                                                                    </svg>
                                                                </span>
                                                            </div>
                                                            <span class="visually-hidden">There are no ratings yet</span>
                                                        </div>
                                                    </div>
                                                    <div class="Notice Notice-success RatingManagerNotice-savedRating RatingManagerNotice-savedRating-hidden Notice-light">
                                                        <div class="Notice-icon"></div>
                                                        <div class="Notice-column">
                                                            <div class="Notice-content"><p class="Notice-text">Star rating saved</p></div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </form>
                                            <div class="ReportAbuseButton">
                                                <div class="ReportAbuseButton--preview"><button class="Button Button--neutral ReportAbuseButton-show-more Button--puffy" type="submit">Report this add-on for abuse</button></div>
                                                <div class="ReportAbuseButton--expanded">
                                                    <h3 class="ReportAbuseButton-header">Report this add-on for abuse</h3>
                                                    <p class="ReportAbuseButton-first-paragraph">
                                                        If you think this add-on violates <a href="https://developer.mozilla.org/en-US/Add-ons/AMO/Policy/Reviews">Mozilla's add-on policies</a> or has security or privacy issues, please
                                                        report these issues to Mozilla using this form.
                                                    </p>
                                                    <p>Please don't use this form to report bugs or request add-on features; this report will be sent to Mozilla and not to the add-on developer.</p>
                                                    <form class="DismissibleTextForm-form">
                                                        <textarea class="DismissibleTextForm-textarea" placeholder="Explain how this add-on is violating our policies." style={{ height: '44px !important'}}></textarea>
                                                        <div class="DismissibleTextForm-buttons">
                                                            <button class="Button Button--neutral DismissibleTextForm-dismiss" type="cancel">Dismiss</button>
                                                            <span class="DismissibleTextForm-delete-submit-buttons">
                                                                <button class="Button Button--action DismissibleTextForm-submit Button--disabled" type="submit" disabled="disabled">Send abuse report</button>
                                                            </span>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <footer class="Card-footer Card-footer-link">
                                        <div class="Addon-read-reviews-footer"><a class="Addon-all-reviews-link" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/reviews/">Read all 365 reviews</a></div>
                                    </footer>
                                </section>
                                <section class="Card ShowMoreCard PermissionsCard ShowMoreCard--expanded Card--no-footer">
                                    <header class="Card-header">
                                        <div class="Card-header-text">
                                            <div class="PermissionsCard-header">
                                                Permissions
                                                <a class="PermissionsCard-learn-more" target="_blank" rel="noopener noreferrer" href="https://support.mozilla.org/kb/permission-request-messages-firefox-extensions">
                                                    Learn more<span class="Icon Icon-external-dark"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </header>
                                    <div class="Card-contents">
                                        <div class="ShowMoreCard-contents">
                                            <p class="PermissionsCard-subhead--required">This add-on needs to:</p>
                                            <ul class="PermissionsCard-list--required">
                                                <li class="Permission"><span class="Icon Icon-permission-clipboardWrite"></span><span class="Permission-description">Input data to the clipboard</span></li>
                                                <li class="Permission"><span class="Icon Icon-permission-tabs"></span><span class="Permission-description">Access browser tabs</span></li>
                                                <li class="Permission"><span class="Icon Icon-permission-hostPermission"></span><span class="Permission-description">Access your data for all websites</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <section class="Card AddonMoreInfo Card--no-footer">
                                    <header class="Card-header"><div class="Card-header-text">More information</div></header>
                                    <div class="Card-contents">
                                        <dl class="DefinitionList AddonMoreInfo-dl">
                                            <dt class="Definition-dt">Add-on Links</dt>
                                            <dd class="Definition-dd AddonMoreInfo-links">
                                                <ul class="AddonMoreInfo-links-contents-list">
                                                    <li>
                                                        <a
                                                            class="AddonMoreInfo-homepage-link"
                                                            href="https://outgoing.prod.mozaws.net/v1/f4eeb80ff0c392e12cf6238f04572f6abbe976858ce9a20439d6ee216efeb6c2/https%3A//binance.org"
                                                            title="https://binance.org"
                                                        >
                                                            Homepage
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            class="AddonMoreInfo-support-link"
                                                            href="https://outgoing.prod.mozaws.net/v1/b060b9205d478f72689ea57ab069b014759c2ff0aad7471abd241f7e61d3bc40/https%3A//community.binance.org/"
                                                            title="https://community.binance.org/"
                                                        >
                                                            Support site
                                                        </a>
                                                    </li>
                                                    <li><a class="AddonMoreInfo-support-email" href="mailto:support@bscprojects.freshdesk.com">Support Email</a></li>
                                                </ul>
                                            </dd>
                                            <dt class="Definition-dt">Version</dt>
                                            <dd class="Definition-dd AddonMoreInfo-version">2.13.0</dd>
                                            <dt class="Definition-dt">Size</dt>
                                            <dd class="Definition-dd AddonMoreInfo-filesize">4.67 MB</dd>
                                            <dt class="Definition-dt">Last updated</dt>
                                            <dd class="Definition-dd AddonMoreInfo-last-updated">2 months ago (Apr 19, 2022)</dd>
                                            <dt class="Definition-dt">Related Categories</dt>
                                            <dd class="Definition-dd AddonMoreInfo-related-categories">
                                                <ul class="AddonMoreInfo-related-categories-list">
                                                    <li><a class="AddonMoreInfo-related-category-link" href="https://addons.mozilla.org/en-US/firefox/extensions/category/other/">Other</a></li>
                                                </ul>
                                            </dd>
                                            <dt class="Definition-dt">License</dt>
                                            <dd class="Definition-dd AddonMoreInfo-license"><span class="AddonMoreInfo-license-name">All Rights Reserved</span></dd>
                                            <dt class="Definition-dt">Privacy Policy</dt>
                                            <dd class="Definition-dd AddonMoreInfo-privacy-policy">
                                                <a class="AddonMoreInfo-privacy-policy-link" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/privacy/">Read the privacy policy for this add-on</a>
                                            </dd>
                                            <dt class="Definition-dt">Version History</dt>
                                            <dd class="Definition-dd AddonMoreInfo-version-history">
                                                <ul class="AddonMoreInfo-links-contents-list">
                                                    <li><a class="AddonMoreInfo-version-history-link" href="https://addons.mozilla.org/en-US/firefox/addon/binance-chain/versions/">See all versions</a></li>
                                                </ul>
                                            </dd>
                                        </dl>
                                    </div>
                                </section>
                                <section class="Card AddAddonToCollection Card--no-footer">
                                    <header class="Card-header"><div class="Card-header-text">Add to collection</div></header>
                                    <div class="Card-contents">
                                        <select class="Select AddAddonToCollection-select">
                                            <option class="AddAddonToCollection-option" value="default" selected="selected">Select a collection…</option>
                                            <option class="AddAddonToCollection-option" value="create-new-collection">Create new collection</option>
                                        </select>
                                    </div>
                                </section>
                                <section class="Card ShowMoreCard AddonDescription-version-notes ShowMoreCard--expanded Card--no-footer">
                                    <header class="Card-header"><div class="Card-header-text">Release notes for 2.13.0</div></header>
                                    <div class="Card-contents">
                                        <div class="ShowMoreCard-contents">
                                            <div>
                                                Features:<br />
                                                - Provide NFT transfer feature
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
          <footer class="Footer">
            <div class="Footer-wrapper">
              <div class="Footer-mozilla-link-wrapper">
                <a class="Footer-mozilla-link" href="https://mozilla.org/" title="Go to Mozilla's homepage">
                  <span class="Icon Icon-mozilla Footer-mozilla-logo"><span class="visually-hidden">Go to Mozilla's homepage</span></span>
                </a>
              </div>
              <section class="Footer-amo-links">
                <h4 class="Footer-links-header"><a href="https://addons.mozilla.org/en-US/firefox/">Add-ons</a></h4>
                <ul class="Footer-links">
                  <li><a href="https://addons.mozilla.org/en-US/about">About</a></li>
                  <li><a class="Footer-blog-link" href="https://addons.mozilla.org/blog/">Firefox Add-ons Blog</a></li>
                  <li><a class="Footer-extension-workshop-link" href="https://extensionworkshop.com/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Extension Workshop</a></li>
                  <li><a href="https://addons.mozilla.org/en-US/developers/">Developer Hub</a></li>
                  <li><a class="Footer-developer-policies-link" href="https://extensionworkshop.com/documentation/publish/add-on-policies/?utm_medium=photon-footer&amp;utm_source=addons.mozilla.org">Developer Policies</a></li>
                  <li><a class="Footer-community-blog-link" href="https://blog.mozilla.com/addons?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Community Blog</a></li>
                  <li><a href="https://discourse.mozilla-community.org/c/add-ons">Forum</a></li>
                  <li><a class="Footer-bug-report-link" href="https://developer.mozilla.org/docs/Mozilla/Add-ons/Contact_us">Report a bug</a></li>
                  <li><a href="https://addons.mozilla.org/en-US/review_guide">Review Guide</a></li>
                </ul>
              </section>
              <section class="Footer-browsers-links">
                <h4 class="Footer-links-header">Browsers</h4>
                <ul class="Footer-links">
                  <li><a class="Footer-desktop-link" href="https://www.mozilla.org/firefox/new/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Desktop</a></li>
                  <li><a class="Footer-mobile-link" href="https://www.mozilla.org/firefox/mobile/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Mobile</a></li>
                  <li><a class="Footer-enterprise-link" href="https://www.mozilla.org/firefox/enterprise/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Enterprise</a></li>
                </ul>
              </section>
              <section class="Footer-product-links">
                <h4 class="Footer-links-header">Products</h4>
                <ul class="Footer-links">
                  <li><a class="Footer-browsers-link" href="https://www.mozilla.org/firefox/browsers/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Browsers</a></li>
                  <li><a class="Footer-vpn-link" href="https://www.mozilla.org/products/vpn/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org#pricing">VPN</a></li>
                  <li><a class="Footer-relay-link" href="https://relay.firefox.com/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Relay</a></li>
                  <li><a class="Footer-monitor-link" href="https://monitor.firefox.com/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Monitor</a></li>
                  <li><a class="Footer-pocket-link" href="https://getpocket.com/?utm_content=footer-link&amp;utm_medium=referral&amp;utm_source=addons.mozilla.org">Pocket</a></li>
                </ul>
                <ul class="Footer-links Footer-links-social">
                  <li class="Footer-link-social">
                    <a href="https://twitter.com/firefox">
                      <span class="Icon Icon-twitter"><span class="visually-hidden">Twitter (@firefox)</span></span>
                    </a>
                  </li>
                  <li class="Footer-link-social">
                    <a href="https://www.instagram.com/firefox/">
                      <span class="Icon Icon-instagram"><span class="visually-hidden">Instagram (Firefox)</span></span>
                    </a>
                  </li>
                  <li class="Footer-link-social">
                    <a href="https://www.youtube.com/firefoxchannel">
                      <span class="Icon Icon-youtube"><span class="visually-hidden">YouTube (firefoxchannel)</span></span>
                    </a>
                  </li>
                </ul>
              </section>
              <ul class="Footer-legal-links">
                <li><a class="Footer-privacy-link" href="https://www.mozilla.org/privacy/websites/">Privacy</a></li>
                <li><a class="Footer-cookies-link" href="https://www.mozilla.org/privacy/websites/">Cookies</a></li>
                <li><a class="Footer-legal-link" href="https://www.mozilla.org/about/legal/terms/mozilla/">Legal</a></li>
              </ul>
              <p class="Footer-copyright">
                Except where otherwise <a href="https://www.mozilla.org/en-US/about/legal/">noted</a>, content on this site is licensed under the
                <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution Share-Alike License v3.0</a> or any later version.
              </p>
              <div class="Footer-language-picker">
                <div class="LanguagePicker">
                  <label for="lang-picker" class="LanguagePicker-header">Change language</label>
                  <select class="LanguagePicker-selector" id="lang-picker">
                    <option value="af">Afrikaans</option>
                    <option value="ar">عربي</option>
                    <option value="ast">Asturianu</option>
                    <option value="az">Azərbaycanca</option>
                    <option value="bg">Български</option>
                    <option value="bn">বাংলা</option>
                    <option value="bs">Bosanski</option>
                    <option value="ca">Català</option>
                    <option value="cak">Maya Kaqchikel</option>
                    <option value="cs">Čeština</option>
                    <option value="da">Dansk</option>
                    <option value="de">Deutsch</option>
                    <option value="dsb">Dolnoserbšćina</option>
                    <option value="el">Ελληνικά</option>
                    <option value="en-CA">English (Canadian)</option>
                    <option value="en-GB">English (British)</option>
                    <option value="en-US" selected="selected">English (US)</option>
                    <option value="es">Español</option>
                    <option value="et">Eesti keel</option>
                    <option value="eu">Euskara</option>
                    <option value="fa">فارسی</option>
                    <option value="fi">suomi</option>
                    <option value="fr">Français</option>
                    <option value="fy-NL">Frysk</option>
                    <option value="ga-IE">Gaeilge</option>
                    <option value="he">עברית</option>
                    <option value="hr">Hrvatski</option>
                    <option value="hsb">Hornjoserbsce</option>
                    <option value="hu">magyar</option>
                    <option value="ia">Interlingua</option>
                    <option value="id">Bahasa Indonesia</option>
                    <option value="is">íslenska</option>
                    <option value="it">Italiano</option>
                    <option value="ja">日本語</option>
                    <option value="ka">ქართული</option>
                    <option value="kab">Taqbaylit</option>
                    <option value="ko">한국어</option>
                    <option value="lt">lietuvių kalba</option>
                    <option value="lv">Latviešu</option>
                    <option value="mk">Македонски</option>
                    <option value="mn">Монгол</option>
                    <option value="ms">Melayu</option>
                    <option value="mt">Malti</option>
                    <option value="nb-NO">Norsk bokmål</option>
                    <option value="nl">Nederlands</option>
                    <option value="nn-NO">Norsk nynorsk</option>
                    <option value="pa-IN">ਪੰਜਾਬੀ (ਭਾਰਤ)</option>
                    <option value="pl">Polski</option>
                    <option value="pt-BR">Português (do&nbsp;Brasil)</option>
                    <option value="pt-PT">Português (Europeu)</option>
                    <option value="ro">Română</option>
                    <option value="ru">Русский</option>
                    <option value="sk">slovenčina</option>
                    <option value="sl">Slovenščina</option>
                    <option value="sq">Shqip</option>
                    <option value="sv-SE">Svenska</option>
                    <option value="te">తెలుగు</option>
                    <option value="th">ไทย</option>
                    <option value="tr">Türkçe</option>
                    <option value="uk">Українська</option>
                    <option value="ur">اُردو</option>
                    <option value="vi">Tiếng Việt</option>
                    <option value="zh-CN">中文 (简体)</option>
                    <option value="zh-TW">正體中文 (繁體)</option>
                  </select>
                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
}

export default App;
