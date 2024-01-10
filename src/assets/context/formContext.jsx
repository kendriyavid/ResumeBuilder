import {createContext, useState, useEffect} from 'react'

const formContext = createContext({})

const [values, setvalues] = useState(
    {
      "firstName":'',
      "lastName":'',
      "profession":'',
      "city":'',
      "country":'',
      "pincode":'',
      "phone":'',
      {
        id: 1,
        title: '',
        organization: '',
        location: '',
        startdate: '',
        enddate: '',
      }
    }
  )


export const formProvider= ({children})=>{
    return(
        <formContext.Provider value={{}}>
            {children}
        </formContext.Provider>
    )
}


export default formContext