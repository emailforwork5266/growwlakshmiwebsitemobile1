import { FunctionComponent, useState, useCallback } from "react";
import NavigationDrawer from "./NavigationDrawer";
import PortalDrawer from "./PortalDrawer";
import styles from "./AndroidLarge9.module.css";

const AndroidLarge9: FunctionComponent = () => {
  const [isNavigationDrawerOpen, setNavigationDrawerOpen] = useState(false);

  const openNavigationDrawer = useCallback(() => {
    setNavigationDrawerOpen(true);
  }, []);

  const closeNavigationDrawer = useCallback(() => {
    setNavigationDrawerOpen(false);
  }, []);

  const onLoginButtonClick = useCallback(() => {
    window.location.href =
      "https://growwlakshmifinserv.investwell.app/app/#/login";
  }, []);

  const onButtonClick = useCallback(() => {
    window.location.href =
      "https://cra.kfintech.com/poponline/POPContributeOnline?AuthID=26745DFD703F8325B79A36D4CB53744EB094CB3985AF9B96848BCC0828A07C37";
  }, []);

  const onButton1Click = useCallback(() => {
    window.location.href =
      "https://growwlakshmifinserv.com/detail/265328/contact-us";
  }, []);

  const onButton2Click = useCallback(() => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.mint&hl=en&gl=US";
  }, []);

  return (
    <>
      <div className={styles.androidLarge9}>
        <img
          className={styles.heroSectionImage}
          alt=""
          src="/hero-section-image@2x.png"
        />
        <img
          className={styles.androidLarge9Child}
          alt=""
          src="/rectangle-29@2x.png"
        />
        <img className={styles.logoImageIcon} alt="" src="/logo-image@2x.png" />
        <button className={styles.drawerMenu} onClick={openNavigationDrawer}>
          <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        </button>
        <button className={styles.loginButton} onClick={onLoginButtonClick}>
          Login
        </button>
        <div className={styles.div}>
          <span className={styles.txt}>
            <span>{`बस `}</span>
            <span className={styles.span}>उगाने वाला</span>
            <span> चाहिए.</span>
          </span>
        </div>
        <div className={styles.boldHeading}>
          <div className={styles.div1}>
            <span className={styles.txt}>
              <span>{`पैसे पेड पर `}</span>
              <span className={styles.span1}>नहीं</span>
              <span> उगते है.</span>
            </span>
          </div>
        </div>
        <img
          className={styles.welcomeImage}
          alt=""
          src="/welcome-image@2x.png"
        />
        <div className={styles.welcomeImageDescriptionContainer}>
          <p className={styles.mrSantoshBehare}>Mr. Santosh Behare</p>
          <p className={styles.mrSantoshBehare}>(CFP)</p>
        </div>
        <div className={styles.welcomeDescription}>
          <p className={styles.investInMutualFundsStocks}>
            I
            <span
              className={styles.nvestInMutual}
            >{`nvest in mutual funds, stocks, bonds, `}</span>
            FD
            <span className={styles.nvestInMutual}>{`, insurance, and `}</span>
          </p>
          <p className={styles.investInMutualFundsStocks}>
            <span className={styles.nvestInMutual}>{`more with us. `}</span>S
            <span className={styles.nvestInMutual}>{`o `}</span>
          </p>
          <p className={styles.thatYouRelax}>{`that you relax `}</p>
          <p className={styles.thatYouRelax}>{`and we make `}</p>
          <p className={styles.thatYouRelax}>{`your money `}</p>
          <p className={styles.grow}>grow.</p>
        </div>
        <div className={styles.welcomeHeading}>
          Welcome to Groww Lakshmi Finserv Pvt Ltd.
        </div>
        <div className={styles.credentialsSection}>
          <div className={styles.div2}>1346+</div>
          <div className={styles.cr}>32.2+ cr</div>
          <div className={styles.div3}>14</div>
          <div className={styles.credentialsSectionChild} />
          <div className={styles.credentialsSectionItem} />
          <div className={styles.trustedClients}>
            <span className={styles.txt}>
              <p className={styles.assetsUnderManagement}>Trusted Clients</p>
            </span>
          </div>
          <div className={styles.assetsUnderManagementContainer}>
            <span className={styles.txt}>
              <p className={styles.assetsUnderManagement}>
                Assets Under Management
              </p>
            </span>
          </div>
          <div className={styles.yearsOfExperienceContainer}>
            <span className={styles.txt}>
              <p className={styles.assetsUnderManagement}>
                Years of Experience
              </p>
            </span>
          </div>
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <div className={styles.startInvestingNow}>Start Investing Now</div>
        </button>
        <button className={styles.button1} onClick={onButton1Click}>
          <div className={styles.startInvestingNow}>Plan now</div>
        </button>
        <button className={styles.button2} onClick={onButton2Click}>
          <div className={styles.startInvestingNow}>Download</div>
        </button>
        <div className={styles.goalsDescription}>
          <span className={styles.txt}>
            <span>{`Plan your Goals with `}</span>
            <span className={styles.certified}>certified</span>
            <span> Financial Planner.</span>
          </span>
        </div>
        <div className={styles.goals}>Goals</div>
        <div className={styles.goalsPanel}>
          <div className={styles.goal05}>
            <div className={styles.goal05Child} />
            <img className={styles.icon} alt="" src="/22537086-1@2x.png" />
            <div className={styles.dreamCar}>Dream Car</div>
          </div>
          <div className={styles.goal04}>
            <div className={styles.goal04Child} />
            <div className={styles.dreamHouse}>Dream House</div>
            <img className={styles.icon1} alt="" src="/3550880-1@2x.png" />
          </div>
          <div className={styles.goal03}>
            <div className={styles.goal05Child} />
            <img
              className={styles.personInsuranceIcon1}
              alt=""
              src="/personinsuranceicon-1@2x.png"
            />
            <div className={styles.insurance}>Insurance</div>
          </div>
          <div className={styles.goal02}>
            <div className={styles.goal02Inner}>
              <div className={styles.ellipseParent}>
                <div className={styles.groupChild} />
                <img
                  className={styles.download1Icon}
                  alt=""
                  src="/download-1@2x.png"
                />
                <div className={styles.holiday}>Holiday</div>
              </div>
            </div>
            <div className={styles.goal02Child} />
            <img className={styles.icon2} alt="" src="/1914359-1@2x.png" />
            <div className={styles.marriage}>Marriage</div>
          </div>
          <div className={styles.goal01}>
            <div className={styles.goal01Child} />
            <div className={styles.education}>Education</div>
            <img className={styles.icon3} alt="" src="/2153317-1@2x.png" />
          </div>
        </div>
        <div className={styles.chooseFromWideContainer}>
          <span className={styles.txt}>
            <span>{`Choose from `}</span>
            <span className={styles.certified}>wide</span>
            <span> range of options.</span>
          </span>
        </div>
        <div className={styles.services}>services</div>
        <div className={styles.service06}>
          <div className={styles.service06Child} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.mutualFunds}>Mutual Funds</div>
          <a className={styles.explore} href="https://www.youtube.com/">
            Explore
          </a>
        </div>
        <div className={styles.service05}>
          <div className={styles.service06Child} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.sip}>SIP</div>
          <a className={styles.explore} href="https://www.youtube.com/">
            Explore
          </a>
        </div>
        <div className={styles.service04}>
          <div className={styles.service06Child} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.sip}>PMS</div>
          <a className={styles.explore} href="https://www.youtube.com/">
            Explore
          </a>
        </div>
        <div className={styles.service03}>
          <div className={styles.service06Child} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.sip}>Bonds</div>
          <a className={styles.explore} href="https://www.youtube.com/">
            Explore
          </a>
        </div>
        <div className={styles.service02}>
          <div className={styles.service06Child} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.sip}>NPS</div>
          <a className={styles.explore} href="https://www.youtube.com/">
            Explore
          </a>
        </div>
        <div className={styles.service01}>
          <div className={styles.service06Child} />
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <div className={styles.sip}>Stocks</div>
          <a className={styles.explore} href="https://www.youtube.com/">
            Explore
          </a>
        </div>
        <div className={styles.getOurApp}>get our app</div>
        <div className={styles.downloadOurAppContainer}>
          <span className={styles.txt}>
            <span>{`Download our app to keep track of your `}</span>
            <span className={styles.certified}>investments</span>
            <span>.</span>
          </span>
        </div>
        <div className={styles.appImage}>
          <img
            className={styles.featuresOfAPersonalFinanceIcon}
            alt=""
            src="/featuresofapersonalfinanceapp-1@2x.png"
          />
        </div>
        <div className={styles.footer}>
          <div className={styles.growwlakshmifinservcom}>
            GrowwLakshmifinserv.com
          </div>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.home}>About</div>
            <div className={styles.home}>Docs</div>
            <div className={styles.home}>GitHub</div>
          </div>
          <div className={styles.logos}>
            <img className={styles.wifiIcon} alt="" src="/wifi@2x.png" />
            <img className={styles.atIcon} alt="" src="/at@2x.png" />
            <img className={styles.youtubeIcon} alt="" src="/youtube@2x.png" />
            <img className={styles.twitterIcon} alt="" src="/twitter@2x.png" />
            <img
              className={styles.facebookIcon}
              alt=""
              src="/facebook@2x.png"
            />
            <img
              className={styles.linkedinIcon}
              alt=""
              src="/linkedin@2x.png"
            />
            <img className={styles.githugIcon} alt="" src="/githug@2x.png" />
          </div>
          <div className={styles.copyright}>
            <div className={styles.copyright2021NextjsContainer}>
              <span>{`© Copyright 2021 Nextjs Starter. Powered with `}</span>
              <span className={styles.span2}>♥</span>
              <span>{` by `}</span>
            </div>
            <div className={styles.vishalmanjare}>@vishalmanjare</div>
          </div>
        </div>
      </div>
      {isNavigationDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeNavigationDrawer}
        >
          <NavigationDrawer onClose={closeNavigationDrawer} />
        </PortalDrawer>
      )}
    </>
  );
};

export default AndroidLarge9;
