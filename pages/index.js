import Head from 'next/head'
import {useState, useEffect} from "react"
import axios from "axios"


export default function Home() {

  var [data, setData] = useState([]);
  var [year, setYear] = useState("");
  var [lanuch, setLanch] = useState("");
  var [land, setLand] = useState("");



  useEffect(() => {
    const fetchData = async () => {
        await axios.get(`https://api.spacexdata.com/v3/launches?&limit=50&launch_year=${year}&launch_success=${lanuch}&land_success=${land}`)
        .then(function(res) {
          setData(eval(res.data))})
    };   
    fetchData();
  }, [year,lanuch,land]);

  return (
    <>
      <Head>
        <title>Space X Launch Program</title>
      </Head>

    <div className="container-fluid" style={{backgroundColor: 'azure'}}>
     <div className="row">
      <div className="col-lg-12">
        <h2> Space X Launch Program</h2>
      </div>
     
      </div>
      <div className="row">
      <div className="col-lg-2">
        <div className="card">
          <h3> Filters</h3>
          <div className="years">
            <h4 className="yearhead">Launch Year</h4>
            <div className="btns">
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2006"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2007"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2008"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2009"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2010"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2011"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2012"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2013"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2014"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2015"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2016"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2017"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2018"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2019"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2020"/>
              <input type="button" className="btn btn-success sec" onClick={e => setYear(e.target.value)} value="2021"/>

              
            </div>
            <div className="years">
                <div className="btns">
                  <h4 className="yearhead">Launch Success</h4>
                  <input type="button" className="btn btn-success sec" onClick={e => setLanch(e.target.value)} value="true"/>
                  <input type="button" className="btn btn-success sec" onClick={e => setLanch(e.target.value)} value="false"/>
                </div>
            </div>
            <div className="years">
              <div className="btns">
                <h4 className="yearhead">Land Success</h4>
                <input type="button" className="btn btn-success sec" onClick={e => setLand(e.target.value)} value="true"/>
                <input type="button" className="btn btn-success sec" onClick={e => setLand(e.target.value)} value="false"/>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-10">
        <div className="Items">
        {data.length != 0 ?
        <>
            {
            (data.map((item)=>(
              <>
              
              
              
              <div className=" card xcard">
              <img src="https://cdn.pixabay.com/photo/2012/11/28/10/35/rocket-launch-67646_1280.jpg" className="img-fluid" alt="" />
              <div className="xcard-header" key={item.flight_number} >
                {item.mission_name} #{item.flight_number}
              </div>
              {console.log(item.launch_success)}
              <div className="xcard-body">
              <div> <span className="launch_year" >
              launch year:  </span>{item.launch_year}</div>

              <div> <span className="launch_year">Successfull-launch: </span><span className="texty">{item.launch_success == true ? "success" : "failure" }</span> 
              </div>
                
                <div> <span className="launch_year">Successfull-landing:</span>  <span className="texty">{item.land_success == true ? "success" : "failure" }</span></div>
              </div>
            </div>
           
              </>
             )))} 
             </>
             : <div className="launch_year">No Data Found on this year</div> }
             {/* {console.log(data)}
             {console.log(land+"land")}
             {console.log(lanuch+"lanch")}
             {console.log(year)} */}
         
        </div>
      </div>
      </div>
      <div className="row">
      <div className="col-lg-12">
        <h6 style={{textAlign:'center'}}> Developed BY Vinesh</h6>
      </div>
     
      </div>
    </div>

    </>
  )
}
