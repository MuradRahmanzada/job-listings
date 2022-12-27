const CompanyLogo = ({logo}: {logo: string}) => {
  return (
    <div>
        <img src={logo} alt="" className='-mt-11 mb-4 w-20 h-20 sm:mt-0 sm:h-24 sm:w-24 sm:my-0'/>
    </div>
  )
}

export default CompanyLogo