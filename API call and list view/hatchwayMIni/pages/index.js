import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import StudentDetails from '../components/StudentDetails';

export default function Home() {
  async function hello() { return await (await fetch(`https://api.hatchways.io/assessment/students`))};
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const [prevSearch, setPrevSearch] = useState('');

  const searchStudents = (e) => {
    setPrevSearch(search);
    setSearch(e.target.value);
    
  }


  useEffect(() => {
    const res = hello();
    
    console.log(res.students);

    hello().then(res => res.json()).then(res => setStudents(res.students));

    

  }, []);


  useEffect(() => {
    const words = search.split(' ');
    const firstName = words[0];
    const lastName = words[1];
    
    if(prevSearch.length > search.length) {
      hello().then(res => res.json()).then(res => setStudents(res.students));
    }

    console.log("firstName "+firstName+" lastName "+lastName);

    if(firstName && lastName){
      const filteredStudents = students.filter(student => student.firstName.toLowerCase().includes(firstName.toLowerCase()) && student.lastName.toLowerCase().includes(lastName.toLowerCase()));
      setStudents(filteredStudents);
    }
    else{
      const stud = students.filter(student => student.firstName.toLowerCase().includes(firstName.toLowerCase()) || student.lastName.toLowerCase().includes(firstName.toLowerCase()));
      setStudents(stud);
    }

  }, [search]);
  


  

  console.log(students);

  return (
    <div className="" style={{backgroundColor:'grey'}}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="row">
          <div className="col-md-12">
            
          </div>
        </div>
        <div className='row'>
            <div className='col-md-3'>

            </div>
            <div className='col-md-8 mt-5 pt-3' style={{backgroundColor:'white'}}>
            <form>
              <div className="form-group">
                
                <input type="text" className="form-control" style={{border:'None', borderBottom:'1px solid black'}} onChange={searchStudents} id="Search Field" placeholder="Search by name" />
                
              </div>
            </form>
        {students.length === 0 ? (
        <h2>Loading...</h2>
        ) : (
          <div className="row pt-3" >
           
            {students.map(function(currStudent, idx){

              return (
                
                    <StudentDetails  key={idx} currStudent={currStudent} />
                
              )

            })}
            </div>
        )
      }
      </div>
      </div>
        
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Rahulshamdasani"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rahul Shamdasani{' '}
          <span className={styles.logo}>
            <Image src="/git.png" alt="GitHub" width={16} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
