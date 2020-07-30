import React from "react"

const Companies = () => {
  return (
    <section id='companies' className='py-4'>
      <div className='container'>
        <div className='companies-content'>
          <p className='m-heading text-center'>
            Companies We’ve <strong>Helped</strong>
          </p>

          {/* Companies List Image */}
          <div className='companies-list mb-2'>
            <img
              src={require("../../assets/img/Home/Companies/KAI.png")}
              alt='KAI'
            />
            <img
              src={require("../../assets/img/Home/Companies/ITM.png")}
              alt='ITM'
            />
            <img
              src={require("../../assets/img/Home/Companies/BCA.png")}
              alt='BCA'
            />
            <img
              src={require("../../assets/img/Home/Companies/Blanja.png")}
              alt='Blanja'
            />
            <img
              src={require("../../assets/img/Home/Companies/TechMahindra.png")}
              alt='TechMahindra'
            />
            <img
              src={require("../../assets/img/Home/Companies/Helpster.png")}
              alt='Helpster'
            />
            <img
              src={require("../../assets/img/Home/Companies/WowBid.png")}
              alt='WowBid'
            />
          </div>

          {/* Companies Paragraph */}
          <p className='companies-text text-justify mb-2'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.” ”
          </p>

          {/* Clients */}
          <div className='client mt-4'>
            <div className='client-line'></div>
            <p className='client-name'>
              SALMA FONSECA, PT. INDO TAMBANGRAYA MEGAH
            </p>
          </div>

          {/* Client Photos */}
          <div className='client-photos mt-4'>
            <img
              src={require("../../assets/img/Home/Companies/Person1.png")}
              alt='Person1'
            />
            <img
              src={require("../../assets/img/Home/Companies/Person2.png")}
              alt='Person2'
            />
            <img
              src={require("../../assets/img/Home/Companies/Person3.png")}
              alt='Person3'
            />
            <img
              src={require("../../assets/img/Home/Companies/Person4.png")}
              alt='Person4'
            />
            <img
              src={require("../../assets/img/Home/Companies/Person5.png")}
              alt='Person5'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Companies
