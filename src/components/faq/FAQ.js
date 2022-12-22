import FAQuestion from "./FAQuestion";
import { Collapse } from "antd";
import FAQAnswer from "./FAQAnswer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const { Panel } = Collapse;
const FAQ = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="py-5 md:py-10">
      <div className="uppercase text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
        <h1 className="uppercase flex justify-center">Frequently</h1>
        <h1 className="uppercase flex justify-center pb-5 sm:pb-8 lg:pb-12 2xl:pb-16">
          Asked Questions
        </h1>
      </div>
      <div className="px-5 sm:space-y-3 lg:space-y-4 xl:space-y-5 sm:px-20 md:px-28 lg:px-36 xl:px-48 2xl:px-60">
        <div
          data-aos="zoom-in"
          data-aos-delay="5000"
          className="border-b-[1px]"
        >
          <Collapse bordered={false} ghost={true}>
            <Panel
              className="bg-slate-50/10 border-[1px]"
              showArrow={false}
              header={<FAQuestion question={"How do I Mint Mpad Chimp"} />}
              key="1"
            >
              <FAQAnswer
                answer={
                  "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. "
                }
              />
            </Panel>
            <Panel
              className="bg-slate-50/10 border-[1px]"
              showArrow={false}
              header={
                <FAQuestion
                  question={"How Many Chimp is Available To Be Minted"}
                />
              }
              key="2"
            >
              <FAQAnswer
                answer={
                  "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. "
                }
              />
            </Panel>
            <Panel
              className="bg-slate-50/10 border-[1px]"
              showArrow={false}
              header={<FAQuestion question={"How Much Does A Chimp Cost?"} />}
              key="3"
            >
              <FAQAnswer
                answer={
                  "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. "
                }
              />
            </Panel>
            <Panel
              className="bg-slate-50/10 border-[1px]"
              showArrow={false}
              header={
                <FAQuestion
                  question={
                    "Will The Community Wallet Continue To Get Additional Funds"
                  }
                />
              }
              key="4"
            >
              <FAQAnswer
                answer={
                  "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world. "
                }
              />
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};
export default FAQ;
