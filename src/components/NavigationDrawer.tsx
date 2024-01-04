import { FunctionComponent, useEffect } from "react";
import styles from "./NavigationDrawer.module.css";

type NavigationDrawerType = {
  onClose?: () => void;
};

const NavigationDrawer: FunctionComponent<NavigationDrawerType> = ({
  onClose,
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.navigationDrawer} data-animate-on-scroll>
      <div className={styles.topParent}>
        <div className={styles.top}>
          <div className={styles.frameParent}>
            <div className={styles.menuWrapper}>
              <div className={styles.menu}>Menu</div>
            </div>
            <div className={styles.administration}>
              <div className={styles.component2variant3}>
                <div className={styles.navItem}>
                  <div className={styles.leftWrapper}>
                    <div className={styles.left}>
                      <div className={styles.administration1}>
                        <img
                          className={styles.administration1Icon}
                          alt=""
                          src="/administration-1@2x.png"
                        />
                      </div>
                      <div className={styles.promotion}>Services</div>
                    </div>
                  </div>
                  <img
                    className={styles.arrowChevronDownIcon}
                    alt=""
                    src="/arrowchevrondown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.administration}>
              <div className={styles.component2variant3}>
                <div className={styles.navItem}>
                  <div className={styles.leftWrapper}>
                    <div className={styles.left}>
                      <div className={styles.administration1}>
                        <img
                          className={styles.administration1Icon}
                          alt=""
                          src="/promotion-1@2x.png"
                        />
                      </div>
                      <div className={styles.promotion}>
                        Social Media Handles
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.arrowChevronDownIcon}
                    alt=""
                    src="/arrowchevrondown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.administration}>
              <div className={styles.component2variant3}>
                <div className={styles.navItem}>
                  <div className={styles.leftWrapper}>
                    <div className={styles.left}>
                      <div className={styles.administration1}>
                        <img
                          className={styles.administration1Icon}
                          alt=""
                          src="/customerloyalty-1@2x.png"
                        />
                      </div>
                      <div className={styles.promotion}>Loyalty</div>
                    </div>
                  </div>
                  <img
                    className={styles.arrowChevronDownIcon}
                    alt=""
                    src="/arrowchevrondown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.administration}>
              <div className={styles.component2variant3}>
                <div className={styles.navItem}>
                  <div className={styles.leftWrapper}>
                    <div className={styles.left}>
                      <div className={styles.administration1}>
                        <img
                          className={styles.administration1Icon}
                          alt=""
                          src="/productmanagement-1@2x.png"
                        />
                      </div>
                      <div className={styles.promotion}>Calculators</div>
                    </div>
                  </div>
                  <img
                    className={styles.arrowChevronDownIcon}
                    alt=""
                    src="/arrowchevrondown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.administration}>
              <div className={styles.leftWrapper}>
                <div className={styles.component2variant3}>
                  <div className={styles.navItem}>
                    <div className={styles.leftWrapper}>
                      <div className={styles.left}>
                        <div className={styles.administration1}>
                          <img
                            className={styles.administration1Icon}
                            alt=""
                            src="/sale-2-1@2x.png"
                          />
                        </div>
                        <div className={styles.promotion}>Offers</div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowChevronDownIcon}
                      alt=""
                      src="/arrowchevrondown@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.administration}>
              <div className={styles.leftWrapper}>
                <div className={styles.leftWrapper}>
                  <div className={styles.component2variant3}>
                    <div className={styles.navItem}>
                      <div className={styles.leftWrapper}>
                        <div className={styles.left}>
                          <div className={styles.administration1}>
                            <img
                              className={styles.administration1Icon}
                              alt=""
                              src="/order-2@2x.png"
                            />
                          </div>
                          <div className={styles.promotion}>Checks</div>
                        </div>
                      </div>
                      <img
                        className={styles.arrowChevronDownIcon}
                        alt=""
                        src="/arrowchevrondown@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.administration}>
              <div className={styles.component2variant3}>
                <div className={styles.navItem}>
                  <div className={styles.leftWrapper}>
                    <div className={styles.left}>
                      <div className={styles.administration1}>
                        <img
                          className={styles.administration1Icon}
                          alt=""
                          src="/supplychainmanagement-2@2x.png"
                        />
                      </div>
                      <div className={styles.promotion}>About Us</div>
                    </div>
                  </div>
                  <img
                    className={styles.arrowChevronDownIcon}
                    alt=""
                    src="/arrowchevrondown@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.administration}>
              <div className={styles.leftWrapper}>
                <div className={styles.component2variant3}>
                  <div className={styles.navItem}>
                    <div className={styles.leftWrapper}>
                      <div className={styles.left}>
                        <div className={styles.administration1}>
                          <img
                            className={styles.administration1Icon}
                            alt=""
                            src="/security-1@2x.png"
                          />
                        </div>
                        <div className={styles.promotion}>Security</div>
                      </div>
                    </div>
                    <img
                      className={styles.arrowChevronDownIcon}
                      alt=""
                      src="/arrowchevrondown@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.toggle}>
          <div className={styles.contactUs}>Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDrawer;
