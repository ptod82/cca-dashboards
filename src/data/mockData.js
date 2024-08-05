
const startYear = 1974;
const currentYear = new Date().getFullYear();

const generatedYears = [];

for (let year = startYear; year <= currentYear; year++) {
  generatedYears.push({ id: year.toString() });
}

generatedYears.sort((a, b) => -a.id.localeCompare(b.id));

export const years = generatedYears;


export const countries = [
  {
    "label": "Afghanistan",
    "id": "2",
    "code": "AF",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": []
  },
  {
    "label": "Albania",
    "id": "3",
    "code": "AL",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Algeria",
    "id": "4",
    "code": "DZ",
    "compareId": [
      5000,
      5100,
      5103
    ],
    "usefulLinks": []
  },
  {
    "label": "American Samoa",
    "id": "5",
    "code": "AS",
    "compareId": [
      5000,
      5500,
      5504
    ],
    "usefulLinks": []
  },
  {
    "label": "Andorra",
    "id": "6",
    "code": "AD",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Angola",
    "id": "7",
    "code": "AO",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Antigua and Barbuda",
    "id": "8",
    "code": "AG",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Argentina",
    "id": "9",
    "code": "AR",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Armenia",
    "id": "1",
    "code": "AM",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": [
      {
        "label": "Armenia AGRIS: Survey of Agricultural Holdings 2020",
        "href": "https://microdata.armstat.am/index.php/catalog/29"
      }
    ]
  },
  {
    "label": "Australia",
    "id": "10",
    "code": "AU",
    "compareId": [
      5000,
      5500,
      5501
    ],
    "usefulLinks": []
  },
  {
    "label": "Austria",
    "id": "11",
    "code": "AT",
    "compareId": [
      5000,
      5400,
      5404
    ],
    "usefulLinks": []
  },
  {
    "label": "Azerbaijan",
    "id": "52",
    "code": "AZ",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Bahamas",
    "id": "12",
    "code": "BS",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Bahrain",
    "id": "13",
    "code": "BH",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Bangladesh",
    "id": "16",
    "code": "BD",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": []
  },
  {
    "label": "Barbados",
    "id": "14",
    "code": "BB",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Belarus",
    "id": "57",
    "code": "BY",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Belgium",
    "id": "255",
    "code": "BE",
    "compareId": [
      5000,
      5400,
      5404
    ],
    "usefulLinks": []
  },
  {
    "label": "Belize",
    "id": "23",
    "code": "BZ",
    "compareId": [
      5000,
      5200,
      5204
    ],
    "usefulLinks": []
  },
  {
    "label": "Benin",
    "id": "53",
    "code": "BJ",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Bermuda",
    "id": "17",
    "code": "BM",
    "compareId": [
      5000,
      5200,
      5203
    ],
    "usefulLinks": []
  },
  {
    "label": "Bhutan",
    "id": "18",
    "code": "BT",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": []
  },
  {
    "label": "Bolivia (Plurinational State of)",
    "id": "19",
    "code": "BO",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Bosnia and Herzegovina",
    "id": "80",
    "code": "BA",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Botswana",
    "id": "20",
    "code": "BW",
    "compareId": [
      5000,
      5100,
      5104
    ],
    "usefulLinks": []
  },
  {
    "label": "Brazil",
    "id": "21",
    "code": "BR",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Brunei Darussalam",
    "id": "26",
    "code": "BN",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Bulgaria",
    "id": "27",
    "code": "BG",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Burkina Faso",
    "id": "233",
    "code": "BF",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Burundi",
    "id": "29",
    "code": "BI",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Cabo Verde",
    "id": "35",
    "code": "CV",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Cambodia",
    "id": "115",
    "code": "KH",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": [
      {
        "label": "Cambodia Agricultural Survey 2021 Survey Report",
        "href": "https://www.nis.gov.kh/index.php/km/2-uncategorised/141-cambodia-agriculture-survey-2021"
      },
      {
        "label": "Cambodia Agricultural Survey 2021 Statistical Brief",
        "href": "https://www.nis.gov.kh/nis/CAS23/CAS%202021%20-%20Statistical%20Brief%20-%20ENG.pdf"
      },
      {
        "label": "Cambodia Agricultural Survey 2021 Microdata Files",
        "href": "https://microdata.nis.gov.kh/index.php/catalog/44"
      },
      {
        "label": "Cambodia Agricultural Survey 2020 Survey Report",
        "href": "https://www.nis.gov.kh/index.php/km/31-cas/110-cas2020"
      },
      {
        "label": "Cambodia Agricultural Survey 2020 Statistical Brief",
        "href": "https://www.nis.gov.kh/nis/Agriculture/CAS2020/Statistical Release CAS 2020_EN.pdf"
      },
      {
        "label": "Cambodia Agricultural Survey 2020 Microdata Files",
        "href": "https://microdata.nis.gov.kh/index.php/catalog/38"
      },
      {
        "label": "Cambodia Inter-Censual Agricultural Survey 2019 Survey Report",
        "href": "https://www.nis.gov.kh/nis/Agriculture/CIAS2019/CIAS%202019%20report_FINAL_EN.pdf"
      },
      {
        "label": "Cambodia Inter-Censual Agricultural Survey 2019 Statistical Brief",
        "href": "https://www.nis.gov.kh/nis/Agriculture/CIAS2019/Statistical%20Release%20CIAS%202019_Final_EN.pdf"
      },
      {
        "label": "Cambodia Inter-Censual Agricultural Survey 2019 Microdata Files",
        "href": "https://microdata.nis.gov.kh/index.php/catalog/36"
      }
    ]
  },
  {
    "label": "Cameroon",
    "id": "32",
    "code": "CM",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Canada",
    "id": "33",
    "code": "CA",
    "compareId": [
      5000,
      5200,
      5203
    ],
    "usefulLinks": []
  },
  {
    "label": "Central African Republic",
    "id": "37",
    "code": "CF",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Chad",
    "id": "39",
    "code": "TD",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Chile",
    "id": "40",
    "code": "CL",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "China",
    "id": "351",
    "code": "CN",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "China, Hong Kong SAR",
    "id": "96",
    "code": "HK",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "China, Macao SAR",
    "id": "128",
    "code": "MO",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "China, mainland",
    "id": "41",
    "code": "CN",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "China, Taiwan Province of",
    "id": "214",
    "code": "TW",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "Colombia",
    "id": "44",
    "code": "CO",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Comoros",
    "id": "45",
    "code": "KM",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Congo",
    "id": "46",
    "code": "CG",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Cook Islands",
    "id": "47",
    "code": "CK",
    "compareId": [
      5000,
      5500,
      5504
    ],
    "usefulLinks": []
  },
  {
    "label": "Costa Rica",
    "id": "48",
    "code": "CR",
    "compareId": [
      5000,
      5200,
      5204
    ],
    "usefulLinks": []
  },
  {
    "label": "C\u00f4te d'Ivoire",
    "id": "107",
    "code": "CI",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Croatia",
    "id": "98",
    "code": "HR",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Cuba",
    "id": "49",
    "code": "CU",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Cyprus",
    "id": "50",
    "code": "CY",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Czechia",
    "id": "167",
    "code": "CZ",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Democratic People's Republic of Korea",
    "id": "116",
    "code": "KP",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "Democratic Republic of the Congo",
    "id": "250",
    "code": "CD",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Denmark",
    "id": "54",
    "code": "DK",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "Djibouti",
    "id": "72",
    "code": "DJ",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Dominica",
    "id": "55",
    "code": "DM",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Dominican Republic",
    "id": "56",
    "code": "DO",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Ecuador",
    "id": "58",
    "code": "EC",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Egypt",
    "id": "59",
    "code": "EG",
    "compareId": [
      5000,
      5100,
      5103
    ],
    "usefulLinks": []
  },
  {
    "label": "El Salvador",
    "id": "60",
    "code": "SV",
    "compareId": [
      5000,
      5200,
      5204
    ],
    "usefulLinks": []
  },
  {
    "label": "Equatorial Guinea",
    "id": "61",
    "code": "GQ",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Eritrea",
    "id": "178",
    "code": "ER",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Estonia",
    "id": "63",
    "code": "EE",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "Eswatini",
    "id": "209",
    "code": "SZ",
    "compareId": [
      5000,
      5100,
      5104
    ],
    "usefulLinks": []
  },
  {
    "label": "Ethiopia",
    "id": "238",
    "code": "ET",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": [
      {
        "label": "Ethiopia Socioeconomic Survey 2018/2019 (ESS)",
        "href": "https://microdata.worldbank.org/index.php/catalog/3823/study-description"
      }
    ]
  },
  {
    "label": "Fiji",
    "id": "66",
    "code": "FJ",
    "compareId": [
      5000,
      5500,
      5502
    ],
    "usefulLinks": []
  },
  {
    "label": "Finland",
    "id": "67",
    "code": "FI",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "France",
    "id": "68",
    "code": "FR",
    "compareId": [
      5000,
      5400,
      5404
    ],
    "usefulLinks": []
  },
  {
    "label": "French Polynesia",
    "id": "70",
    "code": "PF",
    "compareId": [
      5000,
      5500,
      5504
    ],
    "usefulLinks": []
  },
  {
    "label": "Gabon",
    "id": "74",
    "code": "GA",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Gambia",
    "id": "75",
    "code": "GM",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Georgia",
    "id": "73",
    "code": "GE",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": [
      {
        "label": "Agricultural Holding Survey 2022 Final Survey and Thematic Reports",
        "href": "https://www.geostat.ge/media/54293/soflis_meurneoba_2022.pdf"
      },
      {
        "label": "Agricultural Holding Survey 2021 Final Survey and Thematic Reports",
        "href": "https://www.geostat.ge/media/46405/soflis_meurneoba_2021.pdf"
      },
      {
        "label": "Agricultural Holding Survey 2021 Microdata Files",
        "href": "https://www.geostat.ge/en/modules/categories/817/database-of-survey-of-agricultural-holdings-2021"
      },
      {
        "label": "2021 Production Methods and Environment Survey",
        "href": "https://www.geostat.ge/en/modules/categories/798/production-methods-and-environment"
      },
      {
        "label": "Agricultural Holding Survey 2020 Final Survey and Thematic Reports",
        "href": "https://www.geostat.ge/media/38834/soflis_meurneoba_2020.pdf"
      },
      {
        "label": "Agricultural Holding Survey 2020 Microdata Files",
        "href": "https://www.geostat.ge/en/modules/categories/773/database-of-survey-of-agricultural-holdings-2020"
      }
    ]
  },
  {
    "label": "Germany",
    "id": "79",
    "code": "DE",
    "compareId": [
      5000,
      5400,
      5404
    ],
    "usefulLinks": []
  },
  {
    "label": "Ghana",
    "id": "81",
    "code": "GH",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Greece",
    "id": "84",
    "code": "GR",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Greenland",
    "id": "85",
    "code": "GL",
    "compareId": [
      5000,
      5200,
      5203
    ],
    "usefulLinks": []
  },
  {
    "label": "Grenada",
    "id": "86",
    "code": "GD",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Guatemala",
    "id": "89",
    "code": "GT",
    "compareId": [
      5000,
      5200,
      5204
    ],
    "usefulLinks": []
  },
  {
    "label": "Guinea",
    "id": "90",
    "code": "GN",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Guinea-Bissau",
    "id": "175",
    "code": "GW",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Guyana",
    "id": "91",
    "code": "GY",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Haiti",
    "id": "93",
    "code": "HT",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Honduras",
    "id": "95",
    "code": "HN",
    "compareId": [
      5000,
      5200,
      5204
    ],
    "usefulLinks": []
  },
  {
    "label": "Hungary",
    "id": "97",
    "code": "HU",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Iceland",
    "id": "99",
    "code": "IS",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "India",
    "id": "100",
    "code": "IN",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": []
  },
  {
    "label": "Indonesia",
    "id": "101",
    "code": "ID",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Iran (Islamic Republic of)",
    "id": "102",
    "code": "IR",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": []
  },
  {
    "label": "Iraq",
    "id": "103",
    "code": "IQ",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Ireland",
    "id": "104",
    "code": "IE",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "Israel",
    "id": "105",
    "code": "IL",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Italy",
    "id": "106",
    "code": "IT",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Jamaica",
    "id": "109",
    "code": "JM",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Japan",
    "id": "110",
    "code": "JP",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "Jordan",
    "id": "112",
    "code": "JO",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Kazakhstan",
    "id": "108",
    "code": "KZ",
    "compareId": [
      5000,
      5300,
      5301
    ],
    "usefulLinks": []
  },
  {
    "label": "Kenya",
    "id": "114",
    "code": "KE",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Kiribati",
    "id": "83",
    "code": "KI",
    "compareId": [
      5000,
      5500,
      5503
    ],
    "usefulLinks": []
  },
  {
    "label": "Kuwait",
    "id": "118",
    "code": "KW",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Kyrgyzstan",
    "id": "113",
    "code": "KG",
    "compareId": [
      5000,
      5300,
      5301
    ],
    "usefulLinks": []
  },
  {
    "label": "Lao People's Democratic Republic",
    "id": "120",
    "code": "LA",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Latvia",
    "id": "119",
    "code": "LV",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "Lebanon",
    "id": "121",
    "code": "LB",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Lesotho",
    "id": "122",
    "code": "LS",
    "compareId": [
      5000,
      5100,
      5104
    ],
    "usefulLinks": []
  },
  {
    "label": "Liberia",
    "id": "123",
    "code": "LR",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Libya",
    "id": "124",
    "code": "LY",
    "compareId": [
      5000,
      5100,
      5103
    ],
    "usefulLinks": []
  },
  {
    "label": "Lithuania",
    "id": "126",
    "code": "LT",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "Luxembourg",
    "id": "256",
    "code": "LU",
    "compareId": [
      5000,
      5400,
      5404
    ],
    "usefulLinks": []
  },
  {
    "label": "Madagascar",
    "id": "129",
    "code": "MG",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Malawi",
    "id": "130",
    "code": "MW",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": [
      {
        "label": "Integrated Household Panel Survey 2010-2013-2016-2019",
        "href": "https://microdata.worldbank.org/index.php/catalog/3819/study-description"
      }
    ]
  },
  {
    "label": "Malaysia",
    "id": "131",
    "code": "MY",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Maldives",
    "id": "132",
    "code": "MV",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": []
  },
  {
    "label": "Mali",
    "id": "133",
    "code": "ML",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Malta",
    "id": "134",
    "code": "MT",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Marshall Islands",
    "id": "127",
    "code": "MH",
    "compareId": [
      5000,
      5500,
      5503
    ],
    "usefulLinks": []
  },
  {
    "label": "Mauritania",
    "id": "136",
    "code": "MR",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Mauritius",
    "id": "137",
    "code": "MU",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Mexico",
    "id": "138",
    "code": "MX",
    "compareId": [
      5000,
      5200,
      5204
    ],
    "usefulLinks": []
  },
  {
    "label": "Micronesia (Federated States of)",
    "id": "145",
    "code": "FM",
    "compareId": [
      5000,
      5500,
      5503
    ],
    "usefulLinks": []
  },
  {
    "label": "Mongolia",
    "id": "141",
    "code": "MN",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "Montenegro",
    "id": "273",
    "code": "ME",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Morocco",
    "id": "143",
    "code": "MA",
    "compareId": [
      5000,
      5100,
      5103
    ],
    "usefulLinks": []
  },
  {
    "label": "Mozambique",
    "id": "144",
    "code": "MZ",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Myanmar",
    "id": "28",
    "code": "MM",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Namibia",
    "id": "147",
    "code": "NA",
    "compareId": [
      5000,
      5100,
      5104
    ],
    "usefulLinks": []
  },
  {
    "label": "Nauru",
    "id": "148",
    "code": "NR",
    "compareId": [
      5000,
      5500,
      5503
    ],
    "usefulLinks": []
  },
  {
    "label": "Nepal",
    "id": "149",
    "code": "NP",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": [
      {
        "label": "Commercial Livestock Integrated Survey 2021",
        "href": "https://cbs.gov.np/survey-report_commercial-livestock-survey-2021/"
      },
      {
        "label": "Pilot Agriculture Integrated Survey 2019",
        "href": "https://cbs.gov.np/pilot-agriculture-integrated-survey-2019-chitwan/"
      }
    ]
  },
  {
    "label": "Netherlands (Kingdom of the)",
    "id": "150",
    "code": "NL",
    "compareId": [
      5000,
      5400,
      5404
    ],
    "usefulLinks": []
  },
  {
    "label": "New Caledonia",
    "id": "153",
    "code": "NC",
    "compareId": [
      5000,
      5500,
      5502
    ],
    "usefulLinks": []
  },
  {
    "label": "New Zealand",
    "id": "156",
    "code": "NZ",
    "compareId": [
      5000,
      5500,
      5501
    ],
    "usefulLinks": []
  },
  {
    "label": "Nicaragua",
    "id": "157",
    "code": "NI",
    "compareId": [
      5000,
      5200,
      5204
    ],
    "usefulLinks": []
  },
  {
    "label": "Niger",
    "id": "158",
    "code": "NE",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Nigeria",
    "id": "159",
    "code": "NG",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Niue",
    "id": "160",
    "code": "NU",
    "compareId": [
      5000,
      5500,
      5504
    ],
    "usefulLinks": []
  },
  {
    "label": "North Macedonia",
    "id": "154",
    "code": "MK",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Norway",
    "id": "162",
    "code": "NO",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "Oman",
    "id": "221",
    "code": "OM",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Pakistan",
    "id": "165",
    "code": "PK",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": []
  },
  {
    "label": "Palau",
    "id": "180",
    "code": "PW",
    "compareId": [
      5000,
      5500,
      5503
    ],
    "usefulLinks": []
  },
  {
    "label": "Palestine",
    "id": "299",
    "code": "PS",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Panama",
    "id": "166",
    "code": "PA",
    "compareId": [
      5000,
      5200,
      5204
    ],
    "usefulLinks": []
  },
  {
    "label": "Papua New Guinea",
    "id": "168",
    "code": "PG",
    "compareId": [
      5000,
      5500,
      5502
    ],
    "usefulLinks": []
  },
  {
    "label": "Paraguay",
    "id": "169",
    "code": "PY",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Peru",
    "id": "170",
    "code": "PE",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Philippines",
    "id": "171",
    "code": "PH",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Poland",
    "id": "173",
    "code": "PL",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Portugal",
    "id": "174",
    "code": "PT",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Puerto Rico",
    "id": "177",
    "code": "PR",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Qatar",
    "id": "179",
    "code": "QA",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Republic of Korea",
    "id": "117",
    "code": "KR",
    "compareId": [
      5000,
      5300,
      5302
    ],
    "usefulLinks": []
  },
  {
    "label": "Republic of Moldova",
    "id": "146",
    "code": "MD",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Romania",
    "id": "183",
    "code": "RO",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Russian Federation",
    "id": "185",
    "code": "RU",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Rwanda",
    "id": "184",
    "code": "RW",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Saint Kitts and Nevis",
    "id": "188",
    "code": "KN",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Saint Lucia",
    "id": "189",
    "code": "LC",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Saint Vincent and the Grenadines",
    "id": "191",
    "code": "VC",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Samoa",
    "id": "244",
    "code": "WS",
    "compareId": [
      5000,
      5500,
      5504
    ],
    "usefulLinks": []
  },
  {
    "label": "Sao Tome and Principe",
    "id": "193",
    "code": "ST",
    "compareId": [
      5000,
      5100,
      5102
    ],
    "usefulLinks": []
  },
  {
    "label": "Saudi Arabia",
    "id": "194",
    "code": "SA",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Senegal",
    "id": "195",
    "code": "SN",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": [
      {
        "label": "Enquete Agricole Annuelle (2022-2023) Final Report",
        "href": "https://www.dapsa.gouv.sn/content/rapporteaa-20222023"
      },
      {
        "label": "Enquete Agricole Annuelle (2022-2023) DDI Metadata",
        "href": "https://anads.ansd.sn/index.php/catalog/290"
      },
      {
        "label": "Enquete Agricole Annuelle (2022-2023) Microdata Files",
        "href": "https://anads.ansd.sn/index.php/catalog/290"
      },
      {
        "label": "Enquete Agricole Annuelle (2021-2022) Final Report",
        "href": "https://drive.google.com/file/d/1e98ABeSNrehzRk1Sl7FW_Btgtab1vEKJ/view"
      },
      {
        "label": "Enquete Agricole Annuelle (2021-2022) DDI Metadata",
        "href": "http://anads.ansd.sn/index.php/catalog/272"
      },
      {
        "label": "Enquete Agricole Annuelle (2021-2022) Microdata Files",
        "href": "http://anads.ansd.sn/index.php/catalog/272"
      }
    ]
  },
  {
    "label": "Serbia",
    "id": "272",
    "code": "RS",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Seychelles",
    "id": "196",
    "code": "SC",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Sierra Leone",
    "id": "197",
    "code": "SL",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Singapore",
    "id": "200",
    "code": "SG",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Slovakia",
    "id": "199",
    "code": "SK",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "Slovenia",
    "id": "198",
    "code": "SI",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Solomon Islands",
    "id": "25",
    "code": "SB",
    "compareId": [
      5000,
      5500,
      5502
    ],
    "usefulLinks": []
  },
  {
    "label": "Somalia",
    "id": "201",
    "code": "SO",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "South Africa",
    "id": "202",
    "code": "ZA",
    "compareId": [
      5000,
      5100,
      5104
    ],
    "usefulLinks": []
  },
  {
    "label": "South Sudan",
    "id": "277",
    "code": "SS",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Spain",
    "id": "203",
    "code": "ES",
    "compareId": [
      5000,
      5400,
      5403
    ],
    "usefulLinks": []
  },
  {
    "label": "Sri Lanka",
    "id": "38",
    "code": "LK",
    "compareId": [
      5000,
      5300,
      5303
    ],
    "usefulLinks": []
  },
  {
    "label": "Sudan",
    "id": "276",
    "code": "SD",
    "compareId": [
      5000,
      5100,
      5103
    ],
    "usefulLinks": []
  },
  {
    "label": "Suriname",
    "id": "207",
    "code": "SR",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Sweden",
    "id": "210",
    "code": "SE",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "Switzerland",
    "id": "211",
    "code": "CH",
    "compareId": [
      5000,
      5400,
      5404
    ],
    "usefulLinks": []
  },
  {
    "label": "Syrian Arab Republic",
    "id": "212",
    "code": "SY",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Tajikistan",
    "id": "208",
    "code": "TJ",
    "compareId": [
      5000,
      5300,
      5301
    ],
    "usefulLinks": []
  },
  {
    "label": "Thailand",
    "id": "216",
    "code": "TH",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Timor-Leste",
    "id": "176",
    "code": "TL",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Togo",
    "id": "217",
    "code": "TG",
    "compareId": [
      5000,
      5100,
      5105
    ],
    "usefulLinks": []
  },
  {
    "label": "Tokelau",
    "id": "218",
    "code": "TK",
    "compareId": [
      5000,
      5500,
      5504
    ],
    "usefulLinks": []
  },
  {
    "label": "Tonga",
    "id": "219",
    "code": "TO",
    "compareId": [
      5000,
      5500,
      5504
    ],
    "usefulLinks": []
  },
  {
    "label": "Trinidad and Tobago",
    "id": "220",
    "code": "TT",
    "compareId": [
      5000,
      5200,
      5206
    ],
    "usefulLinks": []
  },
  {
    "label": "Tunisia",
    "id": "222",
    "code": "TN",
    "compareId": [
      5000,
      5100,
      5103
    ],
    "usefulLinks": []
  },
  {
    "label": "T\u00fcrkiye",
    "id": "223",
    "code": "TR",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Turkmenistan",
    "id": "213",
    "code": "TM",
    "compareId": [
      5000,
      5300,
      5301
    ],
    "usefulLinks": []
  },
  {
    "label": "Tuvalu",
    "id": "227",
    "code": "TV",
    "compareId": [
      5000,
      5500,
      5504
    ],
    "usefulLinks": []
  },
  {
    "label": "Uganda",
    "id": "226",
    "code": "UG",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": [
      {
        "label": "National Panel Survey 2019-2020",
        "href": "https://microdata.worldbank.org/index.php/catalog/3902/study-description"
      },
      {
        "label": "Annual Agricultural Survey 2019 Final Report",
        "href": "https://www.ubos.org/wp-content/uploads/publications/04_2022AAS2019_Report.pdf"
      },
      {
        "label": "Annual Agricultural Survey 2019 Statistical Brief",
        "href": "https://www.ubos.org/wp-content/uploads/publications/05_2022Uganda_UBOS_StatRelease_AAS2019-Final.pdf"
      }
    ]
  },
  {
    "label": "Ukraine",
    "id": "230",
    "code": "UA",
    "compareId": [
      5000,
      5400,
      5401
    ],
    "usefulLinks": []
  },
  {
    "label": "United Arab Emirates",
    "id": "225",
    "code": "AE",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "United Kingdom of Great Britain and Northern Ireland",
    "id": "229",
    "code": "GB",
    "compareId": [
      5000,
      5400,
      5402
    ],
    "usefulLinks": []
  },
  {
    "label": "United Republic of Tanzania",
    "id": "215",
    "code": "TZ",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "United States of America",
    "id": "231",
    "code": "US",
    "compareId": [
      5000,
      5200,
      5203
    ],
    "usefulLinks": []
  },
  {
    "label": "Uruguay",
    "id": "234",
    "code": "UY",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Uzbekistan",
    "id": "235",
    "code": "UZ",
    "compareId": [
      5000,
      5300,
      5301
    ],
    "usefulLinks": []
  },
  {
    "label": "Vanuatu",
    "id": "155",
    "code": "VU",
    "compareId": [
      5000,
      5500,
      5502
    ],
    "usefulLinks": []
  },
  {
    "label": "Venezuela (Bolivarian Republic of)",
    "id": "236",
    "code": "VE",
    "compareId": [
      5000,
      5200,
      5207
    ],
    "usefulLinks": []
  },
  {
    "label": "Viet Nam",
    "id": "237",
    "code": "VN",
    "compareId": [
      5000,
      5300,
      5304
    ],
    "usefulLinks": []
  },
  {
    "label": "Yemen",
    "id": "249",
    "code": "YE",
    "compareId": [
      5000,
      5300,
      5305
    ],
    "usefulLinks": []
  },
  {
    "label": "Zambia",
    "id": "251",
    "code": "ZM",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  },
  {
    "label": "Zimbabwe",
    "id": "181",
    "code": "ZW",
    "compareId": [
      5000,
      5100,
      5101
    ],
    "usefulLinks": []
  }
];

export const CCAsections = [
  {
    value: 'environment-natural-resources-and-production',
    label: 'Environment, natural resources and production',
    indicators: [
      {
        label: 'Natural resources',
        items: [
          {
            label: '14.6.1 International instruments to combat IUU fishing',
            id: '24030',
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1     
          },
           {
            label: '14.b.1 Protection of access rights for small-scale fisheries',
            id: '24032',
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1     
          },
          {
            label: '14.4.1 Proportion of fish stocks within biologically sustainable levels',
            id: '24029',
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1     
          }
        ]
      }
    ]
  },
  {
    value: 'food-supply-chains-and-markets',
    label: 'Food supply chains and markets',
    indicators: [
      {
        label: '',
        items: [
          {
            label: '2.a.1 Agriculture value added share of GDP',
            id: 24021,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '12.3.1a Food loss percentage',
            id: 24044,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '12.3.1a Global food loss index',
            id: 24045,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '14.7.1 Sustainable fisheries as a proportion of GDP',
            id: 24031,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
        ]
      }
    ]
  },
  {
    value: 'livelihood-poverty-and-equity',
    label: 'Livelihood, poverty and equity',
    indicators: [
      {
        label: '',
        items: [
          {
            label: '5.a.1 Share of women among owners or rights-bearers of agricultural land',
            id: 24043,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '5.a.2 Legal guarantees to women’s equal rights to land ownership and/or control',
            id: 24026,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
        ]
      }
    ]
  },
  {
    value: 'governance-and-policy',
    label: 'Governance and policy',
    indicators: [
      {
        label: 'Investment',
        items: [
          {
            label: 'Gross fixed capital formation (agriculture, forestry and fishing)',
            id: 22030,
            elementCode: ['61840','6139'],
            domainCode: 'CISP',
            chartType: 'multipleAxis',
            flagSDG: 0,
          },
          {
            label: 'Inorganic fertilizer use grouped by nutrient and region',
            id: [3102, 3103, 3104],
            elementCode: '5157',
            domainCode: 'RFN',
            chartType: 'stackedBar',
            flagSDG: 0
          },
        ]
      }
    ]
  },
  {
    value: 'natural-resources-and-production',
    label: 'Natural resources and production',
    indicators: [
      {
        label: 'Natural resources',
        items: [
          {
            label: '15.2.1 Annual forest area change rate',
            id: 24037,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '15.2.1 Forest area under an independently verified forest management certification scheme',
            id: 24038,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '15.2.1 Proportion of forest area with a long-term management plan',
            id: 24039,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '15.2.1 Proportion of forest area within legally established protected areas',
            id: 24040,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '15.2.1 Above-ground biomass in forest',
            id: 24036,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '2.4.1 Proportion of agricultural area under productive and sustainable agriculture',
            id: 24046,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '2.5.1a Plant genetic resources accessions stored ex situ (number)',
            id: 24011,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: '2.5.2 Proportion of local breeds classified as being at risk of extinction',
            id: 24018,
            elementCode: '6120',
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          },
        ]
      }
    ]
  },
  {
    value: 'diets-nutrition-and-health',
    label: 'Diets, nutrition, and health',
    indicators: [
      {
        label: 'Food availability',
        items: [
          {
            label: 'Energy supply by main food group',
            id: [4003, 4005, 4006, 4007, 4009],
            elementCode: '6209',
            domainCode: 'SUA',
            chartType: 'stackedBar',
            flagSDG: 0,
            foodGroup: 'FG1'
          },
         
        ]
      },
       {
        label: 'Food security',
        items: [
          {
            label: '2.1.1 Number of undernourished people',
            id: 24001,
            elementCode: 6120,
            domainCode: 'SDGB',
            chartType: 'line',
            flagSDG: 1,
          }
        ]
      },
       {
        label: 'Food safety',
        items: [
          {
            label: 'Percentage of population using safely managed drinking water services (percent)',
            id: 21045,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Percentage of population using safely managed sanitation services (percent)',
            id: 21046,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Percentage of population using at least basic drinking water services (percent)',
            id: 21047,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Percentage of population using at least basic sanitation services (percent)',
            id: 21048,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
        ]
      },
       {
        label: 'Nutrition',
        items: [
          {
            label: 'Percentage of children under 5 years affected by wasting (percent)',
            id: 21026,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Percentage of children under 5 years of age who are stunted (percent)',
            id: 21025,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Percentage of children under 5 years of age who are overweight (percent)',
            id: 21041,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Prevalence of obesity in the adult population (18 years and older)',
            id: 21042,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Prevalence of anemia among women of reproductive age (15-49 years)',
            id: 21043,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Prevalence of exclusive breastfeeding among infants 0-5 months of age',
            id: 21044,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          {
            label: 'Prevalence of low birthweight (percent)',
            id: 21049,
            elementCode: '6120',
            domainCode: 'FS',
            chartType: 'line',
            flagSDG: 1,
          },
          
        ]
      },
    ]
  },
]


