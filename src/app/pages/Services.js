import React from "react";
import { useParams } from "react-router-dom";
import "./courseDetails.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import LiveVideoCard from "../components/Courses/LiveVedioCard";
import VedioCard from "../components/Courses/VedioCard";

const CourseDetailsPage = () => {
  const { courseId } = useParams();

  const courseDetails = [
    {
      date:"January 21, 2024",
      title: "🎖Empowering Tomorrow's Tech Leaders🎖",
      details: (
        <div>
          
          <div data-aos="zoom-in" className="objectives">
          <h3>🎯5 Cutting-Edge Courses Offered by Fox-IT Centre </h3>
          <ul>
              <li>✅ Data Entry</li>
              <li>✅ Accounting Management </li>
              <li>✅ Web Development </li>
              <li>✅ Graphics Design</li>
              <li>✅ Digital Marketing</li>
            </ul>
                <h3>🎯Our special features: </h3>
          <ul>
              <li>👉Providing life time support card</li>
              <li>👉Life time freelancing support at the end of the course. </li>
              <li>👉Opportunity to ask any question during the class.</li>
              <li>👉Total course 2 exams will be taken.</li>
              <li>👉Record video of each class will be provided after the class.</li>
              <li>👉If you pass the exam, you can get a certificate.</li>
              <li>👉Opportunity to get daily job alerts</li>
              <li>👉Freelancing Marketplace will be supported from scratch</li>
            </ul>
            <h3>🎯Contact for more details: 01709-222240</h3>
          </div>
        </div>
      ),
      images: [
        "https://i.postimg.cc/4yrWc51n/dte-1.jpg",
        "https://i.postimg.cc/63jg1CBf/wbd.webp",
        "https://i.postimg.cc/0yGwGfCF/gpd-3.jpg",
      ],
      vedio: [
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ffoxitcentre%2Fvideos%2F1555000488645997%2F&show_text=false&width=560&t=0"
      ],
      address:
        "Fox-IT Centre, বাসা-১৪৯৯, রোড-০৫, নন্দিপাড়া, খিলগাও,  ঢাকা-১২১৯",
    },
    {
      date:"February 1, 2024",
      title: "এক্সক্লুসিভ  ডাটা এন্ট্রি অনলাইন কোর্স",
      details: (
        <div>
          <div data-aos="zoom-in" className="overview">
            <h3>Overview:</h3>
            <p>
              "ফ্রিল্যান্সিং এমন একটি বিষয় যার সফলতা নির্ভর করে নিজের কাজের উপর।
              সঠিক গাইডলাইন তো অবশ্যই আমরা দিবো। ফ্রিল্যান্সিং করার জন্য পুনরায়
              অনুসন্ধান করে কিভাবে 'মুক্ত পেশাজীবী' হওয়া যায় সেটার জন্যই আমাদের
              এই ডাটা এন্ট্রি কোর্স।"
            </p>
          </div>

          <div data-aos="zoom-in" className="objectives">
            <h3>Objectives :</h3>
            <ul>
              <li> "বেকারত্ব দূর করা"</li>
              <li>"অলস সময় এ আর্ন করার ব্যবস্থা করা"</li>
              <li>"চাকরির পাসাপাশি সফল ফ্রিল্যান্সার গড়ে তোলা"</li>
            </ul>
          </div>
          <div data-aos="zoom-in" className="objectives">
            <h3>Benifits :</h3>
            <ul>
              <li> "ডেডিকেটেড সাপোর্ট"</li>
              <li>"লাইফটাইম সাপোর্ট"</li>
              <li>"প্রিমিয়াম গাইডলাইন"</li>
              <li>"প্রিমিয়াম রিসোর্স"</li>
            </ul>
          </div>
          <div data-aos="zoom-in" className="contact-details">
            <h3>Contact:</h3>
            <p>
              "আমাদের পেইজে টেক্সট করুন", "অথবা কল করুন:", "০১৭০৯-২২২২৪০",
              "০১৮৮৩-৫০২৫৩৬", "০১৮৭৩-৫৯৮১৩৯"
            </p>
          </div>
          <div data-aos="zoom-in" className="address">
            <h3>Address :</h3>
            <p>
              {" "}
              "Fox-IT Centre, বাসা-১৪৯৯, রোড-০৫, নন্দিপাড়া, খিলগাও, ঢাকা-১২১৯"
            </p>
          </div>
        </div>
      ),
      images: [
        "https://i.postimg.cc/4yrWc51n/dte-1.jpg",
        "https://i.postimg.cc/63jg1CBf/wbd.webp",
        "https://i.postimg.cc/0yGwGfCF/gpd-3.jpg",
      ],
      vedio: [
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Ffoxitcentre%2Fvideos%2F2364748180389065%2F&show_text=false&width=476&t=0",
      ],
      address:
        "Fox-IT Centre, বাসা-১৪৯৯, রোড-০৫, নন্দিপাড়া, খিলগাও,  ঢাকা-১২১৯",
    },
  
    
    {
      date:"February 7, 2024",
      title:
        "🔥🔥ডাটা এন্ট্রি কোর্সের জন্য যে প্রশ্নগুলো সব থেকে বেশি জিজ্ঞেস করা হয়ে থাকে🔥🔥",
      subtitle: "সাফল্যের পথে আপনার সঙ্গে",

      images: [
        "https://i.postimg.cc/4yrWc51n/dte-1.jpg",
        "https://i.postimg.cc/63jg1CBf/wbd.webp",
        "https://i.postimg.cc/0yGwGfCF/gpd-3.jpg",
      ],
      vedio: [
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Ffoxitcentre%2Fvideos%2F1031513197914870%2F&show_text=false&width=476&t=0",
      ],
      address:
        "Fox-IT Centre, বাসা-১৪৯৯, রোড-০৫, নন্দিপাড়া, খিলগাও,  ঢাকা-১২১৯",
      details: (
        <div>
          <div data-aos="zoom-in" className="overview">
          <ul>
              <li>✴কোর্স চলাকালিন কি ইনকাম করা যাবে?</li>
              <li>⚡জি করা যাবে। কিছু ছোট ছোট
              টাস্ক আছে যেগুলা আমরা দেখিয়ে দিব। আপনারা ইনস্ট্রাকশন অনুযায়ী কাজ
              করলে প্রত্যেক দিন অল্প অল্প করে কিছু টাকা আর্ন করতে করতে পারবেন।</li>

              <li className="mt-10">✴কোর্স শেষে কি ইন্টার্নশিপের ব্যবস্থা আছে?</li>
              <li>⚡জি কোর্স শেষে
              ইন্টার্নশিপের ব্যবস্থা আছে। আমরা ক্লাসের পার্ফমেন্স অনুযায়ী টপ ৩
              জন কে আমাদের আইটি সেন্টারে ডাটা এন্ট্রির জন্য ইন্টার্নশিপের
              ব্যবস্থা করে দিবো। যেখানে আপনারা হাতে কলমে কাজ শিখতে পারবেন।</li>

              <li className="mt-10"> ✴মার্কেটপ্লেসে কাজ পেতে সহযোগিতা করবেন প্রপারলি নাকি ফাকি দিবেন?</li>
              <li>⚡আমাদের প্রাধান উদ্দেশ্য হচ্ছে কর্মসংস্থানের ব্যবস্থা করা। ডাটা
              এন্ট্রি ছাড়া ও আমাদের আরো প্রজেক্ট আছে। সব ক্ষেত্রেই আমরা সব সময়
              সহযোগিতা মুলক মনোভাব দেখিয়েছি। এক্ষেত্রেও এর বেতিক্রম হবে না। জি
              আমরা আপনাকে কাজ পেতে সম্পুর্ন ভাবে সহযোগিতা করবো।</li>
            </ul>
            <p>
               
               
             
              
            </p>
          </div>
        </div>
      ),
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div>
      <Navbar />
      <div className="course-details container mx-auto grid gap-5">
        {/* <div className="slider-container">
          <Slider {...settings}>
            {courseDetails?.images?.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div> */}

        {courseDetails?.map((course) => (
          <VedioCard courseDetails={course} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailsPage;
