

import '../App.css';
import { IoIosMail, IoMdStar, IoMdStarHalf, IoIosArrowRoundForward, IoIosQuote } from "react-icons/io";
import { FaCertificate, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp, FaAngleDown, FaChalkboardTeacher, FaHandPointRight, FaUniversity } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { PiStudentFill, PiPencilSimpleLineFill, PiChalkboardTeacherFill, PiEnvelopeOpenFill, PiQuotesFill } from "react-icons/pi";
import { FaChildren } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import img1 from '../image/logo.svg';
import img2 from '../image/slider1.webp';
import img3 from '../image/course1.webp';
import img4 from '../image/course2.webp';
import img5 from '../image/course3.jpg';
import img6 from '../image/course4.webp';
import img7 from '../image/course5.webp';
import img8 from '../image/course6.webp';
import img9 from '../image/about.jpeg';
import img10 from '../image/count.jpeg';
import img12 from '../image/happy1.jpeg';
import img13 from '../image/happy-bg1.jpeg';
import img14 from '../image/happy-bg.png';
import img16 from '../image/c1.png';
import img17 from '../image/c2.png';
import img18 from '../image/c3.png';
import img19 from '../image/c4.png';
import img20 from '../image/c5.png';
import img21 from '../image/c6.png';
import img22 from '../image/logo2.svg';
// import img15 from './image/why11.png';


// ============= HEADER >>>>>>>>>>>>>>>>>>>
var header = ["HOME", "COURSES", "Activities", "Blog", "Known Us", "Get In Touch", "Student Zone"]

// ============= SLIDER >>>>>>>>>>>>>>>>>>
var slider = [require('../image/slider1.webp'), require('../image/slider2.webp')]

// ============= COURSES >>>>>>>>>>>>>>>>>>
var cours = [
  { image: require('../image/course1.webp'), name: 'Development Courses' },
  { image: require('../image/course2.webp'), name: 'Design Courses' },
  { image: require('../image/course3.jpg'), name: 'Programming IT' },
  { image: require('../image/course4.webp'), name: 'Trendy Courses' },
  { image: require('../image/course5.webp'), name: 'Civil-Mech. Engineering' },
  { image: require('../image/course6.webp'), name: 'Business Development' },
]

// ============= STUDENT >>>>>>>>>>>>>>>>>>>
var student = [
  { img: require('../image/about1.png'), num: '14000+', text: 'HAPPY STUDENTS' },
  { img: require('../image/about2.png'), num: '10+', text: 'CERTIFICATION APPROVAL' },
  { img: require('../image/about3.png'), num: '70+', text: 'CERTIFIED TEACHERS' },
  { img: require('../image/about4.png'), num: '9000+', text: 'STUDENTS PLACED' },
]

// ============ OUR READ >>>>>>>>>>>>>>>>>>>>>
var read_our = [
  { img: require('../image/our1.png'), head: "Industry Experts As Trainers", des: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
  { img: require('../image/our2.png'), head: "Latest Curriculum", des: "We Provides latest curriculuuch a way that Students will get full knowledge within a short time." },
  { img: require('../image/our3.png'), head: "Latest Technology", des: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
  { img: require('../image/our4.png'), head: "Interview Assistance", des: "At the end of each training,our tible technical questions technical questions you may be asked." },
  { img: require('../image/our5.png'), head: "Free Upgradation", des: "We will be provided free upgradation for any newer version of the course you have." },
  { img: require('../image/our6.png'), head: "Lifetime Support", des: "We will provide you lifetime support on aaaavfsll the courses you learned from us." }
]

// ============ COMPANY SLIDER >>>>>>>>>>>>>>>>
var slider2 = [
  require('../image/c1.png'), 
  require('../image/c2.png'), 
  require('../image/c3.png'), 
  require('../image/c4.png'), 
  require('../image/c5.png'), 
  require('../image/c6.png'),]


// ============= OUR COURSES >>>>>>>>>>>>>>>>>
var ourcours = [
  { name: "3ds Max Civil Training Course" },
  { name: "Computer Training Institute In Katargam" },
  { name: "CCC Certificate Center In Surat" },
  { name: "Adobe Xd Design Training Institute In Surat" },
  { name: "Spoken English Class In Katargam" },
  { name: "3d Game Development Training Institute In Katargam" },
  { name: "Advance Flutter Training Institute In Surat" },
  { name: "Android App Development Institute" },
  { name: "Lumion Training Institute" },
  { name: "Graphics Design Training In Surat" },
  { name: "Advance Laravel Training Institute In Surat" },
  { name: "Wordpress Training Institute In Surat" },
  { name: "Web Development Training In Katargam" },
  { name: "Ios App Training Institute In Katargam" },
  { name: "Best React Js Training Institute" },
  { name: "Codeigniter Training Course" },
  { name: "Autocad Training Institute In Mota Varachha" },
]



function Home() {
  return (
    <div>
      <div className="topinfo">
        <div className="container">
          <div className="headr d-flex">
            <div className="leftinfo d-flex">
              <i><IoIosMail></IoIosMail></i><a>info@cdmi.in</a>
              <i><FaCertificate></FaCertificate></i><a>Verify certificate</a>

            </div>
            <div className="ceninfo"><a>HAVE ANY QUESTION ? +91 90333 16003</a></div>
            <div className="rightinfo d-flex">
              <li><a><FaFacebook></FaFacebook></a></li>
              <li><a><FaTwitter></FaTwitter></a></li>
              <li><a><TiSocialGooglePlus></TiSocialGooglePlus></a></li>
              <li><a><FaLinkedin></FaLinkedin></a></li>
              <li><a><FaInstagram></FaInstagram></a></li>
              <li><a><FaYoutube ></FaYoutube></a></li>
              <li><a><FaWhatsapp ></FaWhatsapp></a></li>
            </div>
          </div>
        </div>
      </div>

      <header >
        <div className="container d-flex">
          <div className="logo">
            <img src={img1}></img>
          </div>

          <div className="menu">
            <ul className='main-menu d-flex'> {
              header.map((ele, ind) => {
                return (
                  <li><a key={ind}>{ele}</a></li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </header>

      {/* slider start */}
      <OwlCarousel className='owl-theme' items={1} autoplay autoplayTimeout={3000} loop margin={10} nav dots={false}>
        {
          slider.map((ele) => {
            return (
              <div class='item'>
                <img src={ele}></img>
              </div>
            )
          })
        }
      </OwlCarousel>
      {/* slider end */}

      {/* CREATIVE COURSE satrt  */}

      <div className='pd-y container course'>
        <p className='course-head'>Creative Courses
          <div className='line'></div>
        </p>
        <h1>Offered Courses</h1>

        <div className='d-flex course-img'>
          {
            cours.map((ele, ind) => {
              return (
                <div className='w-33' key={ind}>
                  <div className='content'>
                    <img src={ele.image}></img>
                    <h2>{ele.name}</h2>
                    <div className='d-flex course-bottom'>
                      <div className='social'>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStarHalf></IoMdStarHalf>
                      </div>
                      <div className='course-btn'>
                        <button><a href=''>Know More...!</a></button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
      </div>
      {/* CREATIVE COURSE end */}

      {/* about us start */}
      <div className="pd-y d-flex about-content">
        <div className='about'>
          <div className='content'>
            <p className='about-head'>About Us
              <div className='line'></div>
            </p>
            <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
            <p className='detail'> Creative Design & Multimedia Institute(CDMI)  is a reputed training
              institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All
              types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market
              in 2014 with the goal to help students, working professionals and other interested candidates get that dream job
              or open that desired freelance business in some of the most popular Computer / IT fields.  Our aim is to ease the
              hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
            </p>
            <button className='about-btn'><a href=''>Enroll Now...! → </a></button>
          </div>
        </div>
        <div className='about-img'>
          <img src={img9}></img>
        </div>
      </div>
      {/* about us end */}

      {/* COUNTING START */}
      <div className='pd-y count'>

        <div className='bacimg' style={{
          width: '100%',
          height: '230px',
          backgroundImage: `url(${img10}) `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

          <div className='container'>
            <div className='d-flex content'>
              {
                student.map((ele, ind) => {
                  return (
                    <div key={ind}>
                      <img src={ele.img} className='count-icon'></img>
                      <h1>{ele.num}</h1>
                      <h3>{ele.text}</h3>
                    </div>
                  )

                })
              }
            </div>
          </div>


        </div>
      </div>
      {/* COUNTING END */}

      {/* HAPPY STUDENTS START */}
      <div className='container pd-y'>

        <div className='d-flex'>
          <div className='w-50 happy'>
            <p className='happy-head'>Happy Students
              <div className='line'></div>
            </p>
            <h1>Alumni Speak</h1>
            <PiQuotesFill className='happy-icon'></PiQuotesFill>
            <p className='detail'>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>

            <div className='happy-bottom d-flex'>
              <img src={img12}></img>
              <div className='bottom-con'>
                <h3>NILAY RABADIYA</h3>
                <h5><i>CEO</i> <span>@ Techtical Solution</span></h5>
              </div>
            </div>
          </div>

          <div className='w-50 happy-img'>
            <div style={{
              width: '500px',
              height: '500px',
              backgroundImage: `url(${img13})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

              <div className='happy1'>
                <img src={img14}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HAPPY STUDENTS END */}

      {/*READ OUR DIFFERENCE START */}
      <div className='pd-y read'>
        <div className='container'>
          <p className='read-head'>READ OUR DIFFERENCE
            <div className='line'></div>
          </p>
          <h1>WHY CHOOSE CREATIVE</h1>
          {/* <div className='d_flex flex_wrap read-img'>
            {
              read_our.map((ele, ind) => {
                return (
                  <div className='read-1 read1'>
                    <img src={ele.img}></img>

                    <h3>{ele.heading}</h3>
                    <p>{ele.des}</p>
                  </div>
                )
              })
            }
          </div> */}

          <div className='readimg d-flex'>
            {
              read_our.map((ele, ind) => {
                return (
                  <div className='w-33' key={ind}>
                    <div className='content'>
                      <div className='icon'>
                        <img src={ele.img}></img>
                      </div>
                      <h2>{ele.head}</h2>
                      <p>{ele.des}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>
      </div>

      {/* READ OUR DIFFERENCE END */}

      {/* STUDENT PLACEMENT START */}

      <div className='pd-y student '>
        <div className='container'>
          <div className='stu-head'>
            <p> STUDENT PLACEMENT</p>
            <div className='line'></div>
            <h1>OUR RECRUITMENT PARTNERS</h1>
          </div>
          <div className='samll-div'></div>
          <div className='com-name d-flex'>
            <OwlCarousel className='owl-theme' items={6} autoplay autoplayTimeout={3000} loop nav>
              {
                slider2.map((ele) => {
                  return (
                    <div class='item com-img'>
                      <img src={ele}></img>
                    </div>
                  )
                })
              }
            </OwlCarousel>
            {/* <div className='com-img'>
              <img src={img16}></img>
            </div> */}
            {/* <div className='com-img'>
              <img src={img17}></img>
            </div>
            <div className='com-img'>
              <img src={img18}></img>
            </div>
            <div className='com-img'>
              <img src={img19}></img>
            </div>
            <div className='com-img'>
              <img src={img20}></img>
            </div>
            <div className='com-img'>
              <img src={img21}></img>
            </div> */}
          </div>
        </div>
      </div>

      {/* STUDENT PLACEMENT END */}
      {/* Our Demanded Course - start */}
      <div className='our'>
        <div className='container'>
          <h2 className='our-head'>Our Demanded Course - </h2>
          <div className='contan'>
            {
              ourcours.map((ele, ind) => {
                return (
                  <div className='our-name'><a key={ind}>{ele.name}</a></div>
                )
              })
            }
          </div>
          <p className='more'><a>Show More</a></p>
        </div>
      </div>
      {/* Our Demanded Course - end */}
      <footer>
        <div className='pd-y'>
          <div className='container d-flex'>
            <div className='s-1 pd-x'>
              <div className="logo">
                <a><img src={img22}></img></a>
              </div>
              <p >Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
              <h6 className='folw'>FOLLOW US ON</h6>
              <ul className='social d-flex'>
                <li><a><FaFacebook></FaFacebook></a></li>
                <li><a><FaTwitter></FaTwitter></a></li>
                <li><a><TiSocialGooglePlus></TiSocialGooglePlus></a></li>
                <li><a><FaLinkedin></FaLinkedin></a></li>
                <li><a><FaInstagram></FaInstagram></a></li>
                <li><a><FaYoutube ></FaYoutube></a></li>
                <li><a><FaWhatsapp ></FaWhatsapp></a></li>
              </ul>
            </div>
            <div className='s-2 pd-x'>
              <h2 className='head'>FEATURE LINKS</h2>
              <div className='list-name'>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>About Us</a></li>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>Blogs</a></li>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>Join Us</a></li>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>Company Login</a></li>
                <li><i><FaHandPointRight ></FaHandPointRight></i><a>Certificate Verification</a></li>
              </div>
            </div>
            <div className='s-3 pd-x'>
              <h6 className='head'>CONTACT US</h6>
              <div className='head-name'>
                <p className='head-offi'><a>HEAD OFFICE - YOGICHOWK</a></p>
                <p >401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat. Mo : <a>+91 90333 16003</a></p>
              </div>
              <div className='other'>
                <h6 className='head'><a>OTHER BRANCHES</a></h6>
                <div className='other-offi'>
                  <li><i><FaUniversity ></FaUniversity></i><a> Katargam</a></li>
                  <li><i><FaUniversity ></FaUniversity></i><a> Mota Varachha</a></li>
                  <li><i><FaUniversity ></FaUniversity></i><a> Adajan</a></li>
                  <li><i><FaUniversity ></FaUniversity></i><a> Navsari</a></li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  )
}
export default Home;