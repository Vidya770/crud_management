import { createContext, useContext, useState } from "react"


const AppCtx = createContext()
function AppProvider({children}) {

  const sdataBase = [
    {
      id: 1,
      name: "Vidya",
      batch:"b47"
      education: "B.Tech"
    },
    {
      id: 2,
      name: "Vaishu",
      batch: "b47",
      education: "B.com"
    },
    {
      id: 3,
      name: "Amit",
      batch: "b47",
      education: "Bsc"
    }
  ]

  const tdataBase = [
    {
      id: 1,
      tname: "Latha maheswari",
      designation: "Principal",
      qualification: "M.Tech",
      experience: "3"
    },
    {
      id: 2,
      tname: "Poonam chauhan",
      designation: "Principal",
      qualification: "M.Sc",
      experience: "5"
    },
    {
      id: 3,
      tname: "Sangita",
      designation: "PGT",
      qualification: "Mtech",
      experience: "9"
    }
  ]

  const spages = [
    {
      name: "Student",
      path: "/students/all"
    }
  ]

  const tpages = [
    {
      name: "Teacher",
      path: "/teachers/all"
    }
  ]
  const [crumState, setCrumState] = useState(spages)
  const [tcrumState,setTcrumState] = useState(tpages)

  const [studentData, setData] = useState(sdataBase)
  const [teacherData,setTeacherData] = useState(tdataBase)


  return (
    <AppCtx.Provider
      value = {{
        studentData,
        setData,
        crumState,
        setCrumState,
        teacherData,
        setTeacherData,
        tcrumState,
        setTcrumState
      }}

    >
      {children}
    </AppCtx.Provider>
  )
}

export const Appstate = ()=>{
  return useContext(AppCtx)
}

export default AppProvider
