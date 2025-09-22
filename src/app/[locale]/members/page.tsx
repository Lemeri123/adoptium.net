"use client"

import React, { useState } from "react"
import { Link } from "@/i18n/navigation"
import PageHeader from "@/components/Common/PageHeader"
import ContactUs from "@/components/ContactUs"
import Logos, { LogoType } from "@/components/Logos"

export default function MembersPage() {
  const cardData = [
    {
      title: "Lead the Future of Java",
      icon: "/images/icons/Group 44.png",
      content: (
        <ul className="text-left space-y-2">
          <li>• Define the technical vision and shape the roadmap of the most widely adopted OpenJDK builds</li>
          <li>• Influence strategic decisions on default settings, security responses, and platform configurations</li>
          <li>• Align project priorities with your own by contributing to test suites, developer engagement, version support, and key metrics</li>
        </ul>
      )
    },
    {
      title: "Strengthen Your Open Source Strategy",
      icon: "/images/icons/Layer_1.png",
      content:(
        <ul className="text-left space-y-2">
          <li>• Join a global, innovative open source ecosystem committed to improving Java for enterprise use.</li>
          <li>• Benefit from stable licensing, predictable development frameworks, and open collaboration.</li>
          <li>• Gain the support of a thriving community to evolve your open source practices.</li>
        </ul>
      )
    },
    {
      title: "Rely on Open, Vendor-Neutral Governance",
      icon: "/images/icons/Group 42.png",
      content:(
        <ul className="text-left space-y-2">
          <li>• Trust in transparent, community-led governance under the Eclipse Foundation.</li>
          <li>• Ensure long-term stability and vendor neutrality to avoid lock-in and reduce operational risk.</li>
        </ul>
      )
    },
    {
      title: "Join the Leaders Driving Java Forward",
      icon: "/images/icons/Group 43.png",
      content:(
        <ul className="text-left space-y-2">
          <li>• Collaborate with leading Java vendors like Microsoft, Red Hat, IBM, Google, Alibaba, and Rivos.</li>
          <li>• Ensure your enterprise use cases shape the future quality standards of Java.</li>
          <li>• Engage directly with OpenJDK distributors to guide development and distribution.</li>
        </ul>
      )
    },
    {
      title: "Cut Costs and Share Infrastructure",
      icon: "/images/icons/Layer_1(1).png",
      content:(
        <ul className="text-left space-y-2">
          <li>• Share infrastructure costs and reduce duplication across build, test, and release pipelines.</li>
          <li>• Improve delivery speed and operational efficiency through shared systems and practices.</li>
        </ul>
      )
    },
    {
      title: "Define the Narrative for Open Java",
      icon: "/images/icons/Group 40.png",
      content:(
        <ul className="text-left space-y-2">
          <li>• Shape the messaging, content, and marketing of Adoptium projects.</li>
          <li>• Contribute to how Java is positioned for global enterprises and developer communities.</li>
        </ul>
      )
    }
  ];
  const memberCard = [
    {
      title:"Strategic Member",
      amount:"$10,000 - $50,000",
      content:(
        <ul className="text-left space-y-2">
        <li>• Critical to their organization’s future</li>
        <li>• Invest significant resources</li>
        <li>• Committees participation</li>
        <li>• Voting rights, high-level governance, influence roadmap</li>
      </ul>
      )
    },
    {
      title:"Enterprise Member",
      amount:"$10,000 - $50,000",
      content:(
        <ul className="text-left space-y-2">
        <li>• Critical to their organization’s future</li>
        <li>• Invest significant resources</li>
        <li>• Committees participation</li>
        <li>• Voting rights, high-level governance, influence roadmap</li>
      </ul>
      )
    },
    {
      title:"Strategic Member",
      amount:"$10,000 - $50,000",
      content:(
        <ul className="text-left space-y-2">
        <li>• Critical to their organization’s future</li>
        <li>• Invest significant resources</li>
        <li>• Committees participation</li>
        <li>• Voting rights, high-level governance, influence roadmap</li>
      </ul>
      )
    }
  ]

  const [expanded, setExpanded] = useState<boolean[]>(Array(cardData.length).fill(false))

  const toggleCard = (index: number) => {
    setExpanded(prev => {
      const newState = [...prev]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <div>
      <PageHeader
        title="Join the Adoptium Working Group"
        subtitle="Become a Member"
        description="Support the future of open, secure, enterprise-ready Java runtimes."
        buttonTitles={["Join Us", "Our Members"]}
      />

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-6">Why Join Adoptium?</h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16">
          The Adoptium Working Group brings together organizations to shape the future of Java
          by collaborating on the delivery of high-quality, TCK-certified OpenJDK binaries
          through Eclipse Temurin. As a member, your organization gains strategic influence,
          community leadership opportunities, and a voice in driving long-term innovation
          across the Java ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={` relative min-h-[248px]  bg-transparent border border-white/20 rounded-2xl p-6 text-center flex flex-col items-center justify- transition-all duration-300 cursor-pointer hover:border-pink-500/60`}
              onClick={() => toggleCard(index)}
            >
              <img src={card.icon} className="w-[117px] h-[93px] mb-4" />
              <h3 className="text-lg font-semibold text-white leading-snug">{card.title}</h3>

              <span className="absolute bottom-4 right-4 text-2xl mt-4">
                {expanded[index] ? "-" : "+"}
              </span>

              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out mt-4 ${
                  expanded[index] ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">{card.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button className="bg-transparent mt-10 border-2 border-pink-500/0 text-white text-[16px] text-base leading-6 w-[290px] h-[50px] rounded-2xl gradient-border">
            Contact Us About Membership
          </button>
          <button className="bg-transparent mt-10 border-2 border-pink-500/0 text-white text-[16px] text-base leading-6 w-[296px] h-[50px] rounded-2xl gradient-border">
            Download Membership Prospectus
          </button>
        </div>
      </section>

      <section>
      <h2 className="text-4xl font-bold text-white text-center mb-6">Membership Levels</h2>
      </section>
      
      <div className="w-full px-3 pt-2 pb-4 mb-4">
        <div className="max-w-4xl mx-auto overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 md:space-x-10 whitespace-nowrap justify-center py-2 min-w-max">
            <Link href="#strategic-sec">
              <span className="px-3 py-2 text-base md:text-lg font-medium leading-6 outline-none hover:text-white hover:border-b-2 hover:border-[#ff1464] text-[#8a809e] border-b-2 border-transparent cursor-pointer transition-all duration-200 ease-in-out">
                Strategic Members
              </span>
            </Link>
            <Link href="#enterprise-sec">
              <span className="px-3 py-2 text-base md:text-lg font-medium leading-6 outline-none hover:text-white hover:border-b-2 hover:border-[#ff1464] text-[#8a809e] border-b-2 border-transparent cursor-pointer transition-all duration-200 ease-in-out">
                Enterprise Members
              </span>
            </Link>
            <Link href="#participant-sec">
              <span className="px-3 py-2 text-base md:text-lg font-medium leading-6 outline-none hover:text-white hover:border-b-2 hover:border-[#ff1464] text-[#8a809e] border-b-2 border-transparent cursor-pointer transition-all duration-200 ease-in-out">
                Participant Members
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Logos
        sectionId="strategic-sec"
        members={LogoType.STRATEGIC}
        title="Strategic Members"
        description="Strategic Members are organizations that view Adoptium working group managed technology as critical to their organization’s future, and are investing significant resources to sustain and define the core activities that are the responsibility of the working group."
      />

      <Logos
        sectionId="enterprise-sec"
        members={LogoType.ENTERPRISE}
        title="Enterprise Members"
        description="Enterprise Members are typically organizations that view the Adoptium working group managed technology as a critical part of their organization‘s business operations. These organizations want to influence the direction and support the development of a runtime technology ecosystem through Eclipse Adoptium."
      />

      <Logos
        sectionId="participant-sec"
        members={LogoType.PARTICIPANT}
        title="Participant Members"
        description="Participant Members are typically organizations that deliver products or services based on Adoptium technology. These organizations want to participate in the evolution of the Eclipse Adoptium ecosystem to ensure it continues to meet their needs."
      />

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 my-12 px-4">
        <p className="text-[20px] leading-[28px] text-white my-0 text-center">
          Are you interested in becoming a member?
        </p>
        <Link href="/join" className="w-full sm:w-auto">
          <button className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-lg shadow-lg hover:shadow-xl shadow-pink-500/30 hover:shadow-pink-500/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
            Become a Member
          </button>
        </Link>
      </div>

      <ContactUs
        title="Speak to our team today"
        buttontitle="Contact Us"
        linkTo="/join"
      />
    </div>
  )
}
