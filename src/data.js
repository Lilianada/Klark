export async function getOrder(id) {
  return (await getEmployees()).find((order) => order.id.toString() === id)
}

export async function getRecentOrders() {
  return (await getEmployees()).slice(0, 10)
}

export async function getEmployees() {
  return [
    {
      idNo: 3000,
      name: 'Leslie Alexander',
      startDate: 'May 9, 2024',
      emailAddress: 'leslie.alexander@example.com',
      role: 'Project Manager'
    },
    {
      idNo: 3001,
      name: 'Michael Foster',
      startDate: 'May 5, 2024',
      emailAddress: 'michael.foster@example.com',
      role: 'Software Engineer'
    },
    {
      idNo: 3002,
      name: 'Dries Vincent',
      startDate: 'Apr 28, 2024',
      emailAddress: 'dries.vincent@example.com',
      role: 'Product Manager'
    },
    {
      idNo: 3003,
      name: 'Lindsay Walton',
      startDate: 'Apr 23, 2024',
      emailAddress: 'lindsay.walton@example.com',
      role: 'UI/UX Designer'
    },
    {
      idNo: 3004,
      name: 'Courtney Henry',
      startDate: 'Apr 18, 2024',
      emailAddress: 'courtney.henry@example.com',
      role: 'Data Scientist'
    },
    {
      idNo: 3005,
      name: 'Tom Cook',
      startDate: 'Apr 14, 2024',
      emailAddress: 'tom.cook@example.com',
      role: 'DevOps Engineer'
    },
    {
      idNo: 3006,
      name: 'Whitney Francis',
      startDate: 'Apr 10, 2024',
      emailAddress: 'whitney.francis@example.com',
      role: 'Marketing Director'
    },
    {
      idNo: 3007,
      name: 'Leonard Krasner',
      startDate: 'Apr 6, 2024',
      emailAddress: 'leonard.krasner@example.com',
      role: 'Customer Service Manager'
    },
    {
      idNo: 3008,
      name: 'Floyd Miles',
      startDate: 'Apr 3, 2024',
      emailAddress: 'floyd.miles@example.com',
      role: 'Chief Financial Officer'
    },
    {
      idNo: 3009,
      name: 'Emily Selman',
      startDate: 'Mar 29, 2024',
      emailAddress: 'emily.selman@example.com',
      role: 'Operations Manager'
    },
    {
      idNo: 3010,
      name: 'Kristin Watson',
      startDate: 'Mar 25, 2024',
      emailAddress: 'kristin.watson@example.com',
      role: 'HR Manager'
    },
    {
      idNo: 3011,
      name: 'Emma Dorsey',
      startDate: 'Mar 21, 2024',
      emailAddress: 'emma.dorsey@example.com',
      role: 'Business Analyst'
    },
    {
      idNo: 3012,
      name: 'Alicia Bell',
      startDate: 'Mar 16, 2024',
      emailAddress: 'alicia.bell@example.com',
      role: 'Sales Manager'
    },
    {
      idNo: 3013,
      name: 'Jenny Wilson',
      startDate: 'Mar 12, 2024',
      emailAddress: 'jenny.wilson@example.com',
      role: 'IT Support Specialist'
    },
    {
      idNo: 3014,
      name: 'Anna Roberts',
      startDate: 'Mar 8, 2024',
      emailAddress: 'anna.roberts@example.com',
      role: 'Lead Developer'
    },
    {
      idNo: 3015,
      name: 'Benjamin Russel',
      startDate: 'Mar 4, 2024',
      emailAddress: 'benjamin.russel@example.com',
      role: 'Network Administrator'
    },
    {
      idNo: 3016,
      name: 'Jeffrey Webb',
      startDate: 'Feb 28, 2024',
      emailAddress: 'jeffrey.webb@example.com',
      role: 'Quality Assurance'
    },
    {
      idNo: 3017,
      name: 'Kathryn Murphy',
      startDate: 'Feb 23, 2024',
      emailAddress: 'kathryn.murphy@example.com',
      role: 'Compliance Officer'
    },
    {
      idNo: 3018,
      name: 'Lawrence Hunter',
      startDate: 'Feb 19, 2024',
      emailAddress: 'lawrence.hunter@example.com',
      role: 'Research & Development'
    },
    {
      idNo: 3019,
      name: 'Yvette Armstrong',
      startDate: 'Feb 15, 2024',
      emailAddress: 'yvette.armstrong@example.com',
      role: 'Public Relations'
    },
    {
      idNo: 3020,
      name: 'Angela Fisher',
      startDate: 'Feb 10, 2024',
      emailAddress: 'angela.fisher@example.com',
      role: 'Logistics Manager'
    },
    {
      idNo: 3021,
      name: 'Blake Reid',
      startDate: 'Feb 5, 2024',
      emailAddress: 'blake.reid@example.com',
      role: 'Compliance Specialist'
    },
    {
      idNo: 3022,
      name: 'Hector Gibbons',
      startDate: 'Feb 1, 2024',
      emailAddress: 'hector.gibbons@example.com',
      role: 'Creative Director'
    },
    {
      idNo: 3023,
      name: 'Fabricio Mendes',
      startDate: 'Jan 27, 2024',
      emailAddress: 'fabricio.mendes@example.com',
      role: 'Product Designer'
    },
    {
      idNo: 3024,
      name: 'Jillian Steward',
      startDate: 'Jan 22, 2024',
      emailAddress: 'jillian.steward@example.com',
      role: 'Content Strategist'
    },
    {
      idNo: 3025,
      name: 'Chelsea Hagon',
      startDate: 'Jan 18, 2024',
      emailAddress: 'chelsea.hagon@example.com',
      role: 'Lead Security Specialist'
    }
  ];
}


export async function getEvent(id) {
  return (await getEvents()).find((event) => event.id.toString() === id)
}

export async function getEventOrders(id) {
  return (await getEmployees()).filter((order) => order.event.id.toString() === id)
}

export async function getEvents() {
  return [
    {
      id: 1000,
      name: 'Bear Hug: Live in Concert',
      url: '/events/1000',
      date: 'May 20, 2024',
      time: '10 PM',
      location: 'Harmony Theater, Winnipeg, MB',
      totalRevenue: '$102,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 500,
      ticketsSold: 350,
      ticketsSoldChange: '+8.1%',
      pageViews: '24,300',
      pageViewsChange: '-0.75%',
      status: 'On Sale',
      imgUrl: '/events/bear-hug.jpg',
      thumbUrl: '/events/bear-hug-thumb.jpg',
    },
    {
      id: 1001,
      name: 'Six Fingers — DJ Set',
      url: '/events/1001',
      date: 'Jun 2, 2024',
      time: '8 PM',
      location: 'Moonbeam Arena, Uxbridge, ON',
      totalRevenue: '$24,115',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 150,
      ticketsSold: 72,
      ticketsSoldChange: '+8.1%',
      pageViews: '57,544',
      pageViewsChange: '-2.5%',
      status: 'On Sale',
      imgUrl: '/events/six-fingers.jpg',
      thumbUrl: '/events/six-fingers-thumb.jpg',
    },
    {
      id: 1002,
      name: 'We All Look The Same',
      url: '/events/1002',
      date: 'Aug 5, 2024',
      time: '4 PM',
      location: 'Electric Coliseum, New York, NY',
      totalRevenue: '$40,598',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 275,
      ticketsSold: 275,
      ticketsSoldChange: '+8.1%',
      pageViews: '122,122',
      pageViewsChange: '-8.0%',
      status: 'Closed',
      imgUrl: '/events/we-all-look-the-same.jpg',
      thumbUrl: '/events/we-all-look-the-same-thumb.jpg',
    },
    {
      id: 1003,
      name: 'Viking People',
      url: '/events/1003',
      date: 'Dec 31, 2024',
      time: '8 PM',
      location: 'Tapestry Hall, Cambridge, ON',
      totalRevenue: '$3,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 40,
      ticketsSold: 6,
      ticketsSoldChange: '+8.1%',
      pageViews: '9,000',
      pageViewsChange: '-0.15%',
      status: 'On Sale',
      imgUrl: '/events/viking-people.jpg',
      thumbUrl: '/events/viking-people-thumb.jpg',
    },
  ]
}

export function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}
