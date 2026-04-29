const coursesData = [
  {
    name: "MBA / PGDM",
    colleges: 102,
    type: "Management",
    collegesList: [
      { name: "IIM Ahmedabad", location: "Ahmedabad", rating: 4.9, fees: "₹25 Lakhs" },
      { name: "IIM Bangalore", location: "Bangalore", rating: 4.8, fees: "₹24 Lakhs" },
      { name: "IIM Calcutta", location: "Kolkata", rating: 4.8, fees: "₹23 Lakhs" },
      { name: "XLRI Jamshedpur", location: "Jamshedpur", rating: 4.7, fees: "₹22 Lakhs" },
      { name: "FMS Delhi", location: "Delhi", rating: 4.7, fees: "₹2 Lakhs" },
      { name: "SPJIMR Mumbai", location: "Mumbai", rating: 4.6, fees: "₹22 Lakhs" },
      { name: "NMIMS Mumbai", location: "Mumbai", rating: 4.5, fees: "₹20 Lakhs" },
      { name: "Symbiosis Pune", location: "Pune", rating: 4.5, fees: "₹18 Lakhs" },
      { name: "IMT Ghaziabad", location: "Ghaziabad", rating: 4.4, fees: "₹17 Lakhs" },
      { name: "XIM Bhubaneswar", location: "Bhubaneswar", rating: 4.4, fees: "₹16 Lakhs" },
      { name: "Great Lakes Chennai", location: "Chennai", rating: 4.3, fees: "₹15 Lakhs" },
      { name: "TAPMI Manipal", location: "Manipal", rating: 4.3, fees: "₹14 Lakhs" },
      { name: "KJ Somaiya", location: "Mumbai", rating: 4.2, fees: "₹13 Lakhs" },
      { name: "FORE Delhi", location: "Delhi", rating: 4.2, fees: "₹12 Lakhs" },
      { name: "IFMR Chennai", location: "Chennai", rating: 4.1, fees: "₹11 Lakhs" },
      { name: "Jaipuria Noida", location: "Noida", rating: 4.1, fees: "₹10 Lakhs" },
      { name: "Welingkar Mumbai", location: "Mumbai", rating: 4.0, fees: "₹9 Lakhs" },
      { name: "NDIM Delhi", location: "Delhi", rating: 4.0, fees: "₹8 Lakhs" },
      { name: "UPES Dehradun", location: "Dehradun", rating: 3.9, fees: "₹12 Lakhs" },
      { name: "Amity Noida", location: "Noida", rating: 3.9, fees: "₹13 Lakhs" }
    ],
  },

  {
    name: "B.Tech / BE",
    colleges: 411,
    type: "Engineering",
    collegesList: [
      { name: "IIT Bombay", location: "Mumbai", rating: 4.9, fees: "₹10 Lakhs" },
      { name: "IIT Delhi", location: "Delhi", rating: 4.9, fees: "₹10 Lakhs" },
      { name: "IIT Madras", location: "Chennai", rating: 4.9, fees: "₹10 Lakhs" },
      { name: "IIT Kanpur", location: "Kanpur", rating: 4.8, fees: "₹9 Lakhs" },
      { name: "IIT Kharagpur", location: "Kharagpur", rating: 4.8, fees: "₹9 Lakhs" },
      { name: "NIT Trichy", location: "Trichy", rating: 4.7, fees: "₹8 Lakhs" },
      { name: "NIT Surathkal", location: "Surathkal", rating: 4.7, fees: "₹8 Lakhs" },
      { name: "BITS Pilani", location: "Pilani", rating: 4.8, fees: "₹20 Lakhs" },
      { name: "VIT Vellore", location: "Vellore", rating: 4.5, fees: "₹7 Lakhs" },
      { name: "SRM University", location: "Chennai", rating: 4.4, fees: "₹6 Lakhs" },
      { name: "KIIT Bhubaneswar", location: "Bhubaneswar", rating: 4.3, fees: "₹5 Lakhs" },
      { name: "MIT Manipal", location: "Manipal", rating: 4.5, fees: "₹15 Lakhs" },
      { name: "Amity University", location: "Noida", rating: 4.2, fees: "₹12 Lakhs" },
      { name: "UPES Dehradun", location: "Dehradun", rating: 4.1, fees: "₹10 Lakhs" },
      { name: "Shiv Nadar University", location: "Noida", rating: 4.3, fees: "₹14 Lakhs" },
      { name: "Thapar University", location: "Patiala", rating: 4.4, fees: "₹13 Lakhs" },
      { name: "LPU Punjab", location: "Punjab", rating: 4.0, fees: "₹8 Lakhs" },
      { name: "Galgotias University", location: "Noida", rating: 3.9, fees: "₹7 Lakhs" },
      { name: "Chandigarh University", location: "Chandigarh", rating: 4.2, fees: "₹9 Lakhs" },
      { name: "Jadavpur University", location: "Kolkata", rating: 4.8, fees: "₹50K" }
    ],
  },

  {
    name: "BBA",
    colleges: 89,
    type: "Management",
    collegesList: [
      { name: "Shaheed Sukhdev College", location: "Delhi", rating: 4.8, fees: "₹1 Lakh" },
      { name: "Christ University", location: "Bangalore", rating: 4.7, fees: "₹6 Lakhs" },
      { name: "NMIMS Mumbai", location: "Mumbai", rating: 4.6, fees: "₹8 Lakhs" }
    ]
  },

  {
    name: "Polytechnic / Diploma",
    colleges: 30,
    type: "Engineering",
    collegesList: [
      { name: "Government Polytechnic Mumbai", location: "Mumbai", rating: 4.3, fees: "₹50K" },
      { name: "Delhi Polytechnic", location: "Delhi", rating: 4.2, fees: "₹40K" }
    ]
  },

  {
    name: "BCA",
    colleges: 69,
    type: "IT",
    collegesList: [
      { name: "Christ University", location: "Bangalore", rating: 4.7, fees: "₹5 Lakhs" },
      { name: "Symbiosis Pune", location: "Pune", rating: 4.6, fees: "₹4 Lakhs" }
    ]
  },

  {
    name: "MCA",
    colleges: 65,
    type: "IT",
    collegesList: [
      { name: "NIT Trichy", location: "Trichy", rating: 4.7, fees: "₹2 Lakhs" },
      { name: "JNU Delhi", location: "Delhi", rating: 4.6, fees: "₹50K" }
    ]
  },

  {
    name: "B.Sc - Nursing",
    colleges: 35,
    type: "Medical",
    collegesList: [
      { name: "AIIMS Delhi", location: "Delhi", rating: 4.9, fees: "₹5K" },
      { name: "CMC Vellore", location: "Vellore", rating: 4.8, fees: "₹30K" }
    ]
  },

  {
    name: "GNM (General Nursing and Midwifery)",
    colleges: 38,
    type: "Medical",
    collegesList: [
      { name: "Apollo College of Nursing", location: "Chennai", rating: 4.5, fees: "₹2 Lakhs" },
      { name: "Manipal College of Nursing", location: "Manipal", rating: 4.6, fees: "₹3 Lakhs" }
    ]
  },

  {
    name: "B.Pharma",
    colleges: 40,
    type: "Medical",
    collegesList: [
      { name: "Jamia Hamdard", location: "Delhi", rating: 4.7, fees: "₹6 Lakhs" },
      { name: "BITS Pilani", location: "Pilani", rating: 4.8, fees: "₹18 Lakhs" }
    ]
  },

   {
    name: "B.Sc - Agriculture",
    colleges: 25,
    type: "Science",
    collegesList: [
      { name: "GB Pant University", location: "Uttarakhand", rating: 4.5, fees: "₹2 Lakhs" },
      { name: "Punjab Agricultural University", location: "Punjab", rating: 4.6, fees: "₹1.5 Lakhs" }
    ]
  },

    {
    name: "LLB",
    colleges: 60,
    type: "Law",
    collegesList: [
      { name: "NLU Delhi", location: "Delhi", rating: 4.9, fees: "₹7 Lakhs" },
      { name: "NLSIU Bangalore", location: "Bangalore", rating: 4.9, fees: "₹8 Lakhs" }
    ]
  },

  {
    name: "BA",
    colleges: 120,
    type: "Arts",
    collegesList: [
      { name: "Delhi University", location: "Delhi", rating: 4.7, fees: "₹30K" },
      { name: "Jadavpur University", location: "Kolkata", rating: 4.8, fees: "₹20K" }
    ]
  },

  {
    name: "B.Com",
    colleges: 150,
    type: "Commerce",
    collegesList: [
      { name: "SRCC Delhi", location: "Delhi", rating: 4.9, fees: "₹50K" },
      { name: "Loyola College", location: "Chennai", rating: 4.7, fees: "₹60K" }
    ]
  }


];

export default coursesData;