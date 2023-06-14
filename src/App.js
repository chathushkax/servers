
import './App.css';
import './Api.css';

function App() {
  const Storage_disk = [
    {
      name: "S5500_Controller_1_A",
      link: "https://172.22.66.97:8088"
    },
    {
      name: " S5500_Controller_1_B",
      link: "https://172.22.66.98:8088"
    },
    {
      name: "S5500_Controller_2_A",
      link: "https://172.22.66.99:8088"
    },
    {
      name: "S5500_Controller_2_B",
      link: "https://172.22.66.100:8088"
    },
    {
      name: "S5500_Controller_3_A",
      link: "https://172.22.66.101:8088"
    },
    {
      name: "S5500_Controller_3_B",
      link: "https://172.22.66.102:8088"
    },
    {
      name: "S5500_Controller_1_A",
      link: "https://172.22.6.62:8088"
    },
    {
      name: "S5500_Controller_1_B",
      link: "https://172.22.6.64:8088"
    },
    {
      name: "S5500_Controller_2_A",
      link: "https://172.22.6.66:8088"
    },
    {
      name: "S5500_Controller_2_B",
      link: "https://172.22.6.68:8088"
    },
    {
      name: "S5500_Controller_3_A",
      link: "https://172.22.6.95:8088"
    },
    {
      name: "S5500_Controller_3_B",
      link: "https://172.22.6.96:8088"
    },
    {
      name: "S5500_Controller_4_A",
      link: "https://172.22.66.232:8088"
    },
    {
      name: "S5500_Controller_4_B",
      link: "https://172.22.66.233:8088"
    },
    {
      name: "S5500_Controller_5_A",
      link: "https://172.22.66.234:8088"
    },
    {
      name: "S5500_Controller_5_B",
      link: "https://172.22.66.235:8088"
    },
    {
      name: "S5500_Controller_6_A",
      link: "https://172.22.66.236:8088"
    },
    {
      name: "S5500_Controller_6_B",
      link: "https://172.22.66.237:8088"
    },
    {
      name: "Mediation_ControllerA",
      link: "https://172.22.103.90:8088"
    },
    {
      name: "Mediation_ControllerB",
      link: "https://172.22.103.91:8088"
    }
    
  ];

  const ATAE_frame = [
    {
      name: "ROOM4_ATAE_F1",
      link: "https://172.22.66.112"
    },
    {
      name: "ROOM4_ATAE_F2",
      link: "https://172.22.66.115"
    },
    {
      name: "ROOM4_ATAE_F3",
      link: "https://172.22.66.118"
    },
    {
      name: "ROOM4_ATAE_F4",
      link: "https://172.22.66.121"
    },{
      name: "ROOM4_E9000_F1",
      link: "https://172.22.66.240"
    },
    {
      name: "ROOM4_E9000_F2",
      link: "https://172.22.66.243"
    },
    {
      name: "ROOM2_ATAE_F1",
      link: " https://172.22.6.73"
    },
    {
      name: "ROOM2_ATAE_F2",
      link: " https://172.22.6.76"
    },
    {
      name: "ROOM2_E9000_F1",
      link: " https://172.22.6.79"
    }
  ];

  const dataArray_Storage_disk = Storage_disk.map((item, index) => (
    <div key={index}>
      <p>{item.name}</p>
      <p>{item.link}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer"><button class="button-49" role="button">Connect</button></a>
    </div>
  ));

  const dataArray_ATAE_frame = ATAE_frame.map((item, index) => (
    <div key={index}>
      <p>{item.name}</p>
      <p>{item.link}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer"><button class="button-49" role="button">Connect</button></a>
    </div>
  ));

  return (
    <>
    <div className='container'>
      <div className='card' style={{display: "flex",justifyContent: "space-between"}}>
        <div style={{width:"100%"}}>
          <img src="./mobitel.png" alt="" style={{height: "80%"}}/>
        </div>
        <div style={{ textAlign: "center",width:"100%", backgroundColor:"aqua", boxShadow: "rgba(159, 159, 165, 0.2) 0px 7px 29px 0px", borderRadius:"10px"}}>
          <h1 style={{fontSize: "70px", width: "100%", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>SERVERS</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="card">
        <h2>Storage Disk Status</h2>
        {dataArray_Storage_disk}
      </div>
      <div className="card">
        <h2>ATAE Frame</h2>
        {dataArray_ATAE_frame}
      </div>
    </div>  
    </>
  );
}

export default App;
