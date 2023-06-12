'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');
const fs = require('fs');

const users = [
    {
        "id": "0",
        "name": "Janie Witting MD",
        "npwp": "68.038.7-000.000",
        "phoneNumber": "+62 548-7652-4848",
        "email": "Garrison.Skiles51@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "1",
        "name": "Marion Cormier",
        "npwp": "59.113.0-000.000",
        "phoneNumber": "+62 012-3528-5112",
        "email": "Savion_Kessler57@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "2",
        "name": "Isabel Collins",
        "npwp": "14.049.4-000.000",
        "phoneNumber": "+62 328-7279-6799",
        "email": "Cleta.Yundt@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "3",
        "name": "Marion Mitchell",
        "npwp": "72.566.2-000.000",
        "phoneNumber": "+62 517-8775-1036",
        "email": "Evert.Huels@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "4",
        "name": "Ana Rolfson",
        "npwp": "80.487.3-000.000",
        "phoneNumber": "+62 686-3086-8663",
        "email": "Tess1@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "5",
        "name": "Mary Kreiger",
        "npwp": "99.017.0-000.000",
        "phoneNumber": "+62 140-4506-3953",
        "email": "Assunta81@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "6",
        "name": "Darin Hintz",
        "npwp": "20.572.0-000.000",
        "phoneNumber": "+62 930-4312-6063",
        "email": "Edyth_Hilpert-Beahan47@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "7",
        "name": "Celia McGlynn MD",
        "npwp": "70.909.9-000.000",
        "phoneNumber": "+62 877-5202-0883",
        "email": "Ari10@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "8",
        "name": "Elias Rosenbaum MD",
        "npwp": "85.577.3-000.000",
        "phoneNumber": "+62 632-8011-6194",
        "email": "Joanny_Fahey3@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "9",
        "name": "Rita Schiller",
        "npwp": "51.310.4-000.000",
        "phoneNumber": "+62 118-5186-1284",
        "email": "Chaim.Bergstrom-Treutel@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "10",
        "name": "Gordon McKenzie",
        "npwp": "34.578.2-000.000",
        "phoneNumber": "+62 005-5779-1513",
        "email": "Mckenna.Wolf61@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "11",
        "name": "Mr. Clark Kunze",
        "npwp": "27.156.3-000.000",
        "phoneNumber": "+62 876-3377-2030",
        "email": "Constantin60@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "12",
        "name": "Theodore Thompson Sr.",
        "npwp": "51.033.9-000.000",
        "phoneNumber": "+62 783-9926-8657",
        "email": "Abbey.Kub@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "13",
        "name": "Saul Maggio",
        "npwp": "04.473.6-000.000",
        "phoneNumber": "+62 968-8756-3893",
        "email": "Estel_Carroll4@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "14",
        "name": "Marta Beer",
        "npwp": "41.375.0-000.000",
        "phoneNumber": "+62 385-5315-5379",
        "email": "Elwin44@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "15",
        "name": "Paulette Schimmel",
        "npwp": "16.950.0-000.000",
        "phoneNumber": "+62 986-4176-9463",
        "email": "Jon20@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "16",
        "name": "Vicky Swift",
        "npwp": "10.710.0-000.000",
        "phoneNumber": "+62 858-9522-6157",
        "email": "Deon_Nicolas@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "17",
        "name": "Vincent Tremblay Sr.",
        "npwp": "88.009.7-000.000",
        "phoneNumber": "+62 121-1527-4241",
        "email": "Josh_Fadel42@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "18",
        "name": "Wayne Schultz",
        "npwp": "28.276.2-000.000",
        "phoneNumber": "+62 890-6594-5632",
        "email": "Kayli92@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "19",
        "name": "Tyler Kovacek",
        "npwp": "99.286.1-000.000",
        "phoneNumber": "+62 770-9278-6709",
        "email": "Nicolette_Bogisich@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "20",
        "name": "Sheri Brakus",
        "npwp": "06.229.8-000.000",
        "phoneNumber": "+62 272-7945-4553",
        "email": "Delmer99@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "21",
        "name": "Marcos Lehner",
        "npwp": "98.140.3-000.000",
        "phoneNumber": "+62 467-7207-9171",
        "email": "Daniella_Pfeffer73@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "22",
        "name": "Mr. Bruce Price",
        "npwp": "45.899.0-000.000",
        "phoneNumber": "+62 594-0804-8091",
        "email": "Franco_Lind99@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "23",
        "name": "Ms. Ethel Upton I",
        "npwp": "30.866.3-000.000",
        "phoneNumber": "+62 985-9530-0257",
        "email": "Margarita_Maggio@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "24",
        "name": "Victoria Bins",
        "npwp": "66.857.0-000.000",
        "phoneNumber": "+62 355-9389-1091",
        "email": "Amina.Hayes@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "25",
        "name": "Evelyn Boyle",
        "npwp": "19.854.8-000.000",
        "phoneNumber": "+62 888-0512-8898",
        "email": "Corine.Wisozk63@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "26",
        "name": "Bernard Orn-Pacocha",
        "npwp": "17.867.9-000.000",
        "phoneNumber": "+62 182-0313-6404",
        "email": "Dovie.Wiza54@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "27",
        "name": "Joel Cummerata",
        "npwp": "42.086.2-000.000",
        "phoneNumber": "+62 100-7481-3577",
        "email": "Alexandrine1@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "28",
        "name": "Rogelio Hauck",
        "npwp": "37.590.0-000.000",
        "phoneNumber": "+62 253-7921-7871",
        "email": "Stanford16@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "29",
        "name": "Bradford Strosin Sr.",
        "npwp": "53.209.1-000.000",
        "phoneNumber": "+62 125-4466-3101",
        "email": "Jamal.Volkman72@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "30",
        "name": "Joseph Moore",
        "npwp": "68.725.2-000.000",
        "phoneNumber": "+62 834-0710-3719",
        "email": "Chadd.Wisozk69@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "31",
        "name": "Mr. Carl Blanda",
        "npwp": "40.808.8-000.000",
        "phoneNumber": "+62 418-4146-0539",
        "email": "Justen0@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "32",
        "name": "Santos Torphy",
        "npwp": "08.799.2-000.000",
        "phoneNumber": "+62 709-8849-3500",
        "email": "Nettie27@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "33",
        "name": "Bradley Walsh V",
        "npwp": "57.354.6-000.000",
        "phoneNumber": "+62 314-3585-0947",
        "email": "Immanuel_Lakin16@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "34",
        "name": "Cassandra Dicki",
        "npwp": "39.638.9-000.000",
        "phoneNumber": "+62 215-4949-1395",
        "email": "Andres.Walker27@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "35",
        "name": "Cassandra Dickinson",
        "npwp": "24.065.2-000.000",
        "phoneNumber": "+62 004-6650-9636",
        "email": "Tavares30@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "36",
        "name": "Bessie Jast",
        "npwp": "70.268.1-000.000",
        "phoneNumber": "+62 079-8755-7694",
        "email": "Ella.Deckow@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "37",
        "name": "Kelly Kreiger DDS",
        "npwp": "49.707.6-000.000",
        "phoneNumber": "+62 913-3896-2202",
        "email": "Pablo18@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "38",
        "name": "Alejandro Fay",
        "npwp": "90.600.9-000.000",
        "phoneNumber": "+62 053-9138-6363",
        "email": "Etha_Walker@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "39",
        "name": "Sylvester Koelpin",
        "npwp": "99.828.3-000.000",
        "phoneNumber": "+62 614-3823-3848",
        "email": "Treva_Tromp17@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "40",
        "name": "Abraham Hayes",
        "npwp": "34.221.8-000.000",
        "phoneNumber": "+62 934-2374-9859",
        "email": "Brannon88@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "41",
        "name": "Joyce Mitchell",
        "npwp": "32.580.3-000.000",
        "phoneNumber": "+62 915-8690-5904",
        "email": "Hildegard_Balistreri64@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "42",
        "name": "Tim Bauch",
        "npwp": "93.269.0-000.000",
        "phoneNumber": "+62 796-4252-1000",
        "email": "Miracle_Rodriguez@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "43",
        "name": "Arturo Flatley",
        "npwp": "03.010.5-000.000",
        "phoneNumber": "+62 446-8692-6465",
        "email": "Lori.Blick35@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "44",
        "name": "Sabrina Goyette",
        "npwp": "36.674.8-000.000",
        "phoneNumber": "+62 333-7835-3251",
        "email": "Laney.Wiza@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "45",
        "name": "Hubert Wisoky",
        "npwp": "55.227.0-000.000",
        "phoneNumber": "+62 660-6763-7375",
        "email": "Alec_Wiegand19@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "46",
        "name": "Kelli Sipes",
        "npwp": "44.974.4-000.000",
        "phoneNumber": "+62 238-0653-9940",
        "email": "Rhiannon.Lueilwitz@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "47",
        "name": "Dallas Cruickshank",
        "npwp": "28.345.1-000.000",
        "phoneNumber": "+62 746-9846-9006",
        "email": "Kyra5@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "48",
        "name": "Mrs. Jackie Keeling",
        "npwp": "32.341.6-000.000",
        "phoneNumber": "+62 730-8540-4562",
        "email": "Ken92@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "49",
        "name": "Larry Toy",
        "npwp": "28.947.0-000.000",
        "phoneNumber": "+62 271-3316-2064",
        "email": "Thalia_Pfeffer@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "50",
        "name": "Shawn Wehner",
        "npwp": "83.504.1-000.000",
        "phoneNumber": "+62 240-3092-4698",
        "email": "Brannon.Kuphal@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "51",
        "name": "Dr. Max O'Conner",
        "npwp": "65.731.0-000.000",
        "phoneNumber": "+62 828-7361-7824",
        "email": "Janick.Heathcote63@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "52",
        "name": "Virgil Gibson",
        "npwp": "24.146.6-000.000",
        "phoneNumber": "+62 330-6966-3972",
        "email": "Enrique.Runolfsson@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "53",
        "name": "Cary Farrell",
        "npwp": "44.963.8-000.000",
        "phoneNumber": "+62 360-4846-2220",
        "email": "Maia57@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "54",
        "name": "Dale Hegmann",
        "npwp": "27.890.2-000.000",
        "phoneNumber": "+62 083-4317-4644",
        "email": "Jeffrey_Senger@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "55",
        "name": "Mrs. Joy Kohler",
        "npwp": "06.702.4-000.000",
        "phoneNumber": "+62 709-9343-1236",
        "email": "Rolando.Blanda-Ryan@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "56",
        "name": "Christian Kuhn",
        "npwp": "56.248.2-000.000",
        "phoneNumber": "+62 951-4659-9347",
        "email": "Alessia.Cassin@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "57",
        "name": "Alexandra Fahey",
        "npwp": "34.057.6-000.000",
        "phoneNumber": "+62 210-8610-0157",
        "email": "Dominic28@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "58",
        "name": "Alton Reilly",
        "npwp": "84.782.0-000.000",
        "phoneNumber": "+62 328-8527-9550",
        "email": "Darrel_MacGyver@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "59",
        "name": "Marianne Zulauf DDS",
        "npwp": "12.905.3-000.000",
        "phoneNumber": "+62 809-4465-8603",
        "email": "Glenda40@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "60",
        "name": "Viola Herzog-Rippin",
        "npwp": "78.511.4-000.000",
        "phoneNumber": "+62 222-3133-2162",
        "email": "Thora79@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "61",
        "name": "Shelly McKenzie",
        "npwp": "10.523.2-000.000",
        "phoneNumber": "+62 399-1638-2383",
        "email": "Meredith18@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "62",
        "name": "Olga Fisher",
        "npwp": "84.184.2-000.000",
        "phoneNumber": "+62 606-0663-1585",
        "email": "Dolores.Hackett@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "63",
        "name": "Tasha Parisian-Quigley Sr.",
        "npwp": "88.360.1-000.000",
        "phoneNumber": "+62 488-5942-9567",
        "email": "Greta.Raynor73@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "64",
        "name": "Tiffany Bernier",
        "npwp": "71.850.5-000.000",
        "phoneNumber": "+62 195-1289-4380",
        "email": "Noemi_Senger@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "65",
        "name": "Fred Rodriguez",
        "npwp": "68.892.7-000.000",
        "phoneNumber": "+62 528-5674-7543",
        "email": "Hulda_Leannon85@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "66",
        "name": "Johnathan Graham",
        "npwp": "64.978.2-000.000",
        "phoneNumber": "+62 288-4314-7238",
        "email": "Emmanuel33@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "67",
        "name": "Dr. Pamela Parker",
        "npwp": "71.074.5-000.000",
        "phoneNumber": "+62 307-0360-6917",
        "email": "Cheyenne.Wilderman91@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "68",
        "name": "Melvin Krajcik",
        "npwp": "59.323.3-000.000",
        "phoneNumber": "+62 485-6470-1945",
        "email": "Hailie.Hintz@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "69",
        "name": "Elijah Armstrong",
        "npwp": "40.046.0-000.000",
        "phoneNumber": "+62 466-0903-3862",
        "email": "Jane_Harvey13@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "70",
        "name": "Velma Harber",
        "npwp": "68.364.8-000.000",
        "phoneNumber": "+62 772-5863-4411",
        "email": "Ahmed_Satterfield@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "71",
        "name": "Emma King",
        "npwp": "05.398.1-000.000",
        "phoneNumber": "+62 766-6874-4304",
        "email": "Antonetta.Schmeler-Brekke0@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "72",
        "name": "Clarence Beer",
        "npwp": "59.831.1-000.000",
        "phoneNumber": "+62 404-8474-9523",
        "email": "Roslyn48@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "73",
        "name": "Matt Stehr",
        "npwp": "99.144.9-000.000",
        "phoneNumber": "+62 932-2976-7871",
        "email": "Casimer51@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "74",
        "name": "Roderick Tremblay",
        "npwp": "35.890.8-000.000",
        "phoneNumber": "+62 108-4232-3417",
        "email": "Christine_Lemke43@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "75",
        "name": "Jessie Cronin",
        "npwp": "09.105.9-000.000",
        "phoneNumber": "+62 012-4150-9286",
        "email": "Matt72@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "76",
        "name": "Hugo Marquardt",
        "npwp": "91.813.3-000.000",
        "phoneNumber": "+62 563-7417-2129",
        "email": "Julien.Johns@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "77",
        "name": "Marco Ankunding Sr.",
        "npwp": "07.355.4-000.000",
        "phoneNumber": "+62 405-6127-3080",
        "email": "Reese56@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "78",
        "name": "Ron Shields",
        "npwp": "52.890.6-000.000",
        "phoneNumber": "+62 412-6436-6212",
        "email": "Kenton.Kerluke54@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "79",
        "name": "Randall Bartell",
        "npwp": "64.833.3-000.000",
        "phoneNumber": "+62 352-8601-3656",
        "email": "Moises10@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "80",
        "name": "Bernice Rutherford",
        "npwp": "77.054.9-000.000",
        "phoneNumber": "+62 802-3160-6708",
        "email": "Dell.Kohler@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "81",
        "name": "Dr. Belinda Bauch",
        "npwp": "89.222.7-000.000",
        "phoneNumber": "+62 995-3290-1984",
        "email": "Jess_Bauch37@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "82",
        "name": "Doyle Kunde",
        "npwp": "66.494.5-000.000",
        "phoneNumber": "+62 497-1559-7683",
        "email": "Branson84@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "83",
        "name": "Jimmy Mohr",
        "npwp": "55.449.2-000.000",
        "phoneNumber": "+62 079-2004-9200",
        "email": "Tanner95@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "84",
        "name": "Dr. Alan Kovacek",
        "npwp": "40.316.4-000.000",
        "phoneNumber": "+62 973-9931-3653",
        "email": "Lea31@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "85",
        "name": "Miss Minnie Durgan",
        "npwp": "02.473.8-000.000",
        "phoneNumber": "+62 062-4070-2582",
        "email": "Catalina.Smitham@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "86",
        "name": "Kellie Schumm",
        "npwp": "99.625.6-000.000",
        "phoneNumber": "+62 225-2352-7786",
        "email": "Aida5@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "87",
        "name": "Alex Ondricka-Strosin Sr.",
        "npwp": "54.217.1-000.000",
        "phoneNumber": "+62 210-2607-2391",
        "email": "Beryl.Smitham@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "88",
        "name": "Shirley Kozey",
        "npwp": "71.806.5-000.000",
        "phoneNumber": "+62 663-2297-1382",
        "email": "Porter_Rippin@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "89",
        "name": "Larry Hoppe",
        "npwp": "20.398.5-000.000",
        "phoneNumber": "+62 510-8196-7211",
        "email": "Sammy47@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "90",
        "name": "Samuel King",
        "npwp": "19.167.7-000.000",
        "phoneNumber": "+62 158-9409-7468",
        "email": "Neva.Medhurst@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "91",
        "name": "Lorraine Bartoletti",
        "npwp": "31.187.3-000.000",
        "phoneNumber": "+62 198-4174-6095",
        "email": "Onie_Macejkovic17@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "92",
        "name": "Earl Berge",
        "npwp": "49.447.1-000.000",
        "phoneNumber": "+62 504-3066-7166",
        "email": "Izaiah5@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "93",
        "name": "Dave Hudson-Dietrich",
        "npwp": "72.409.7-000.000",
        "phoneNumber": "+62 936-3768-2275",
        "email": "Soledad62@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "94",
        "name": "Lela Beier",
        "npwp": "99.777.3-000.000",
        "phoneNumber": "+62 966-1501-6310",
        "email": "Prince.Reynolds@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "95",
        "name": "Carole Hackett",
        "npwp": "82.248.2-000.000",
        "phoneNumber": "+62 193-1767-8790",
        "email": "Quincy.Breitenberg@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "96",
        "name": "Vernon Beahan-Maggio",
        "npwp": "95.216.7-000.000",
        "phoneNumber": "+62 387-8851-1549",
        "email": "Khalid.Deckow83@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "97",
        "name": "Ricardo Nitzsche",
        "npwp": "38.375.4-000.000",
        "phoneNumber": "+62 961-9478-3268",
        "email": "Daren_Halvorson4@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "98",
        "name": "Frankie Ondricka",
        "npwp": "42.669.9-000.000",
        "phoneNumber": "+62 609-7989-3388",
        "email": "Nils32@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "99",
        "name": "Ollie Botsford",
        "npwp": "91.358.8-000.000",
        "phoneNumber": "+62 706-1362-7618",
        "email": "Pinkie_Lemke45@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "100",
        "name": "Carl Mueller",
        "npwp": "44.767.9-000.000",
        "phoneNumber": "+62 492-4882-3772",
        "email": "Kaitlyn_Steuber@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "101",
        "name": "Margarita Hammes IV",
        "npwp": "29.153.7-000.000",
        "phoneNumber": "+62 801-4783-6346",
        "email": "Jerome_Haley9@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "102",
        "name": "Devin Mann",
        "npwp": "42.396.2-000.000",
        "phoneNumber": "+62 681-4583-7844",
        "email": "Zion_Stoltenberg@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "103",
        "name": "Mr. Patrick MacGyver",
        "npwp": "21.842.4-000.000",
        "phoneNumber": "+62 810-0759-5514",
        "email": "Kacie.Nikolaus@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "104",
        "name": "Inez Greenfelder",
        "npwp": "02.967.9-000.000",
        "phoneNumber": "+62 543-8245-1057",
        "email": "Neha.Cummings58@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "105",
        "name": "Eileen Keeling",
        "npwp": "73.378.2-000.000",
        "phoneNumber": "+62 010-3872-3581",
        "email": "Jacinto63@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "106",
        "name": "Cesar Feest",
        "npwp": "75.125.7-000.000",
        "phoneNumber": "+62 531-7485-4986",
        "email": "Samanta_Cummings@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "107",
        "name": "Wendy Mayer DVM",
        "npwp": "30.133.8-000.000",
        "phoneNumber": "+62 456-2712-0465",
        "email": "Jeremie.Barton@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "108",
        "name": "Doris Schneider",
        "npwp": "27.352.3-000.000",
        "phoneNumber": "+62 781-4476-2726",
        "email": "Isidro5@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "109",
        "name": "Maryann Pfeffer",
        "npwp": "55.970.6-000.000",
        "phoneNumber": "+62 962-6165-8051",
        "email": "Garnett.Labadie48@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "110",
        "name": "Marta Deckow",
        "npwp": "81.999.5-000.000",
        "phoneNumber": "+62 970-6133-6728",
        "email": "Hosea_Murray68@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "111",
        "name": "Bob Vandervort",
        "npwp": "46.866.6-000.000",
        "phoneNumber": "+62 298-2857-4158",
        "email": "Korey66@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "112",
        "name": "Neal Padberg",
        "npwp": "44.650.4-000.000",
        "phoneNumber": "+62 783-6709-7016",
        "email": "Maria78@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "113",
        "name": "Joan O'Kon",
        "npwp": "08.197.6-000.000",
        "phoneNumber": "+62 545-7858-3901",
        "email": "Lavinia8@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "114",
        "name": "Matt Paucek",
        "npwp": "46.219.7-000.000",
        "phoneNumber": "+62 771-7408-7883",
        "email": "Jessy63@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "115",
        "name": "Domingo Rolfson",
        "npwp": "74.655.6-000.000",
        "phoneNumber": "+62 246-2737-1136",
        "email": "Liam27@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "116",
        "name": "Janis Pouros",
        "npwp": "30.841.5-000.000",
        "phoneNumber": "+62 872-2766-4386",
        "email": "Sonia21@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "117",
        "name": "Miss Veronica Waelchi",
        "npwp": "77.618.4-000.000",
        "phoneNumber": "+62 494-6616-0237",
        "email": "Haylee.Davis56@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "118",
        "name": "Melanie Champlin",
        "npwp": "56.309.0-000.000",
        "phoneNumber": "+62 753-9318-1827",
        "email": "Blaze.Cruickshank-Pacocha@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "119",
        "name": "Gwen Stark",
        "npwp": "95.129.0-000.000",
        "phoneNumber": "+62 728-5701-1838",
        "email": "Henry.Corwin@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "120",
        "name": "Mrs. Gretchen Zboncak",
        "npwp": "67.218.3-000.000",
        "phoneNumber": "+62 631-4673-8135",
        "email": "Maverick_Runolfsdottir98@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "121",
        "name": "Clara Franecki",
        "npwp": "64.942.1-000.000",
        "phoneNumber": "+62 979-0310-1831",
        "email": "Troy.Gerhold0@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "122",
        "name": "Lela Jakubowski",
        "npwp": "88.984.9-000.000",
        "phoneNumber": "+62 348-3774-7397",
        "email": "Daija8@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "123",
        "name": "Fredrick Nolan",
        "npwp": "74.633.4-000.000",
        "phoneNumber": "+62 396-7088-0126",
        "email": "Twila_Kris55@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "124",
        "name": "Alma Ullrich",
        "npwp": "36.371.0-000.000",
        "phoneNumber": "+62 125-3415-0849",
        "email": "Jerrod.Schoen@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "125",
        "name": "Essie Pacocha",
        "npwp": "03.774.1-000.000",
        "phoneNumber": "+62 036-6459-2174",
        "email": "Laurel_Sawayn60@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "126",
        "name": "Lyle Heidenreich",
        "npwp": "45.216.5-000.000",
        "phoneNumber": "+62 567-8639-7709",
        "email": "Minerva.Bogan@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "127",
        "name": "Felicia Cassin",
        "npwp": "01.824.3-000.000",
        "phoneNumber": "+62 688-1335-4882",
        "email": "Danyka_Stracke0@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "128",
        "name": "Frankie Thompson IV",
        "npwp": "21.441.3-000.000",
        "phoneNumber": "+62 513-7850-2033",
        "email": "Brenda.Block@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "129",
        "name": "Jeremiah Wunsch",
        "npwp": "56.396.7-000.000",
        "phoneNumber": "+62 390-1472-9956",
        "email": "Christa_Hilpert@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "130",
        "name": "Pat Gottlieb",
        "npwp": "96.335.1-000.000",
        "phoneNumber": "+62 036-2971-2195",
        "email": "Kara_McDermott-Romaguera@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "131",
        "name": "Rosemarie Pacocha",
        "npwp": "84.146.2-000.000",
        "phoneNumber": "+62 785-4042-5268",
        "email": "Letha.OKon@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "132",
        "name": "Shelley Wintheiser",
        "npwp": "96.557.2-000.000",
        "phoneNumber": "+62 579-4797-0210",
        "email": "Kariane_Russel@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "133",
        "name": "Gwendolyn Ullrich",
        "npwp": "40.554.3-000.000",
        "phoneNumber": "+62 455-0890-8955",
        "email": "Norris.Russel@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "134",
        "name": "Sandra O'Kon",
        "npwp": "34.709.1-000.000",
        "phoneNumber": "+62 602-8931-2816",
        "email": "Otho66@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "135",
        "name": "Miranda Ratke",
        "npwp": "86.937.8-000.000",
        "phoneNumber": "+62 733-0340-7779",
        "email": "Milo_Weber95@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "136",
        "name": "Sean Aufderhar",
        "npwp": "61.482.8-000.000",
        "phoneNumber": "+62 531-9136-1157",
        "email": "Mabelle.Shanahan@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "137",
        "name": "Laura Kshlerin PhD",
        "npwp": "69.349.7-000.000",
        "phoneNumber": "+62 380-3269-3819",
        "email": "Gloria_Kuhlman@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "138",
        "name": "Diana Runte DDS",
        "npwp": "59.660.7-000.000",
        "phoneNumber": "+62 824-1865-3350",
        "email": "Simeon_Walsh11@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "139",
        "name": "Rodney Feeney",
        "npwp": "21.279.1-000.000",
        "phoneNumber": "+62 212-7617-6148",
        "email": "Eldon.Deckow55@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "140",
        "name": "Rolando Schiller",
        "npwp": "06.516.4-000.000",
        "phoneNumber": "+62 567-7263-8261",
        "email": "Janet84@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "141",
        "name": "Kristina Prosacco",
        "npwp": "78.680.6-000.000",
        "phoneNumber": "+62 670-4248-7131",
        "email": "Tyrell_Huels@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "142",
        "name": "Kelli Wiza",
        "npwp": "71.904.9-000.000",
        "phoneNumber": "+62 753-2204-9686",
        "email": "Marcus.Cole@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "143",
        "name": "Terence Hodkiewicz",
        "npwp": "46.278.6-000.000",
        "phoneNumber": "+62 760-6385-8567",
        "email": "Rory.Pagac18@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "144",
        "name": "Alice Zemlak",
        "npwp": "71.836.9-000.000",
        "phoneNumber": "+62 941-9766-6342",
        "email": "Beverly_Yundt@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "145",
        "name": "Brendan Bayer",
        "npwp": "23.559.8-000.000",
        "phoneNumber": "+62 713-4428-7837",
        "email": "Darryl_Ullrich@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "146",
        "name": "Elsie Hansen",
        "npwp": "04.953.1-000.000",
        "phoneNumber": "+62 608-6180-7218",
        "email": "Alice77@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "147",
        "name": "Neal Abernathy",
        "npwp": "34.528.1-000.000",
        "phoneNumber": "+62 419-0549-6400",
        "email": "Gabriella.Parker-Witting35@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "148",
        "name": "Kristine Cronin-Wilkinson DDS",
        "npwp": "03.075.6-000.000",
        "phoneNumber": "+62 913-9689-8957",
        "email": "Ashleigh.McClure@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "149",
        "name": "Douglas Boyle",
        "npwp": "40.524.1-000.000",
        "phoneNumber": "+62 695-2558-7528",
        "email": "Willow_Turner@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "150",
        "name": "Desiree Funk",
        "npwp": "27.035.3-000.000",
        "phoneNumber": "+62 552-8007-9680",
        "email": "Halle_Steuber3@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "151",
        "name": "Joel Leuschke Jr.",
        "npwp": "94.164.5-000.000",
        "phoneNumber": "+62 463-8899-0770",
        "email": "Lucius.Botsford43@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "152",
        "name": "Sammy VonRueden",
        "npwp": "26.100.5-000.000",
        "phoneNumber": "+62 923-1738-5921",
        "email": "Effie33@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "153",
        "name": "Miss Jo Luettgen",
        "npwp": "74.921.4-000.000",
        "phoneNumber": "+62 650-2057-2492",
        "email": "Weston.Skiles19@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "154",
        "name": "Levi Weimann",
        "npwp": "10.426.8-000.000",
        "phoneNumber": "+62 514-2455-4212",
        "email": "Ilene42@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "155",
        "name": "Rudolph Fritsch",
        "npwp": "14.799.8-000.000",
        "phoneNumber": "+62 099-9110-4540",
        "email": "Deshawn_Veum@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "156",
        "name": "Miss Bobbie Rowe",
        "npwp": "90.021.4-000.000",
        "phoneNumber": "+62 664-5031-3504",
        "email": "Jared_Bruen16@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "157",
        "name": "Stanley Kozey",
        "npwp": "56.052.6-000.000",
        "phoneNumber": "+62 181-3981-9940",
        "email": "Mayra56@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "158",
        "name": "Belinda Gislason",
        "npwp": "97.845.9-000.000",
        "phoneNumber": "+62 810-8976-7070",
        "email": "Jeremy4@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "159",
        "name": "Joanna Murphy",
        "npwp": "38.019.0-000.000",
        "phoneNumber": "+62 802-4320-4086",
        "email": "Audra_McClure28@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "160",
        "name": "Gerard Walker",
        "npwp": "74.250.9-000.000",
        "phoneNumber": "+62 215-2294-4263",
        "email": "Ana_Mills14@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "161",
        "name": "Lorena Morissette DVM",
        "npwp": "80.961.8-000.000",
        "phoneNumber": "+62 512-5830-4230",
        "email": "Otha42@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "162",
        "name": "Angie Jast",
        "npwp": "70.863.3-000.000",
        "phoneNumber": "+62 724-5769-5625",
        "email": "Raymundo_Rempel@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "163",
        "name": "Kelvin Konopelski",
        "npwp": "43.935.8-000.000",
        "phoneNumber": "+62 035-5002-8911",
        "email": "Juvenal.Beer@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "164",
        "name": "Vickie Boyer",
        "npwp": "56.569.7-000.000",
        "phoneNumber": "+62 880-7923-7700",
        "email": "Delpha_Kuhic@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "165",
        "name": "Gertrude Gerhold",
        "npwp": "28.009.1-000.000",
        "phoneNumber": "+62 037-9068-5462",
        "email": "Marlen_Prosacco57@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "166",
        "name": "Louis Medhurst",
        "npwp": "27.051.3-000.000",
        "phoneNumber": "+62 230-8386-9605",
        "email": "Elenor_Champlin25@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "167",
        "name": "Kate Bergnaum",
        "npwp": "17.734.5-000.000",
        "phoneNumber": "+62 955-3039-6036",
        "email": "Kendrick15@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "168",
        "name": "Doyle West",
        "npwp": "21.101.8-000.000",
        "phoneNumber": "+62 878-8574-5546",
        "email": "Korey43@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "169",
        "name": "Eula Murray",
        "npwp": "20.017.3-000.000",
        "phoneNumber": "+62 647-5587-9765",
        "email": "Domenic_Ebert97@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "170",
        "name": "Lonnie Ritchie",
        "npwp": "57.033.2-000.000",
        "phoneNumber": "+62 953-3631-9477",
        "email": "Roslyn.Sipes@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "171",
        "name": "Jaime Rippin",
        "npwp": "17.292.0-000.000",
        "phoneNumber": "+62 772-5380-1754",
        "email": "Hershel80@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "172",
        "name": "Lila Pfannerstill IV",
        "npwp": "09.604.5-000.000",
        "phoneNumber": "+62 913-5241-0632",
        "email": "Jayson.Schneider82@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "173",
        "name": "Brenda Runte",
        "npwp": "67.114.0-000.000",
        "phoneNumber": "+62 319-1499-6110",
        "email": "Maryam.Block86@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "174",
        "name": "Leland Fritsch",
        "npwp": "09.597.3-000.000",
        "phoneNumber": "+62 983-2726-6287",
        "email": "Jermey75@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "175",
        "name": "Erica Purdy",
        "npwp": "50.198.9-000.000",
        "phoneNumber": "+62 327-1570-6547",
        "email": "Benny.Gerlach36@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "176",
        "name": "Mr. Curtis Jaskolski",
        "npwp": "76.847.6-000.000",
        "phoneNumber": "+62 696-3610-0335",
        "email": "Raegan_Murray@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "177",
        "name": "Kari Donnelly",
        "npwp": "38.132.3-000.000",
        "phoneNumber": "+62 918-9089-3531",
        "email": "Dahlia.McClure@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "178",
        "name": "Gilberto Pollich",
        "npwp": "08.928.8-000.000",
        "phoneNumber": "+62 947-6864-5869",
        "email": "Candace.Blick@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "179",
        "name": "Melvin Ledner",
        "npwp": "86.346.6-000.000",
        "phoneNumber": "+62 713-5810-3191",
        "email": "Kayla_Stark@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "180",
        "name": "George Konopelski",
        "npwp": "83.263.9-000.000",
        "phoneNumber": "+62 840-1851-2549",
        "email": "Cecilia.Stiedemann4@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "181",
        "name": "Erick Schimmel",
        "npwp": "90.236.3-000.000",
        "phoneNumber": "+62 420-0120-8662",
        "email": "Horacio8@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "182",
        "name": "Anthony Macejkovic",
        "npwp": "80.921.4-000.000",
        "phoneNumber": "+62 754-4311-3543",
        "email": "Mariah11@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "183",
        "name": "Candace Rath",
        "npwp": "70.889.7-000.000",
        "phoneNumber": "+62 994-8531-5935",
        "email": "Kamren7@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "184",
        "name": "Darryl Leannon",
        "npwp": "16.271.5-000.000",
        "phoneNumber": "+62 601-2416-5782",
        "email": "Jacky.Hermiston13@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "185",
        "name": "Gladys Kovacek IV",
        "npwp": "98.545.2-000.000",
        "phoneNumber": "+62 428-6302-9085",
        "email": "Creola_Turcotte@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "186",
        "name": "Desiree Wehner",
        "npwp": "74.445.1-000.000",
        "phoneNumber": "+62 722-2327-7984",
        "email": "Bailey.Swift28@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "187",
        "name": "Sylvia Gibson",
        "npwp": "73.455.9-000.000",
        "phoneNumber": "+62 001-0695-1424",
        "email": "Bert_Orn26@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "188",
        "name": "Cheryl Pacocha",
        "npwp": "95.088.7-000.000",
        "phoneNumber": "+62 678-1064-4787",
        "email": "Tyrique69@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "189",
        "name": "Michele Mertz",
        "npwp": "74.367.7-000.000",
        "phoneNumber": "+62 608-9603-4584",
        "email": "Stephanie_Rath@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "190",
        "name": "Eddie Zemlak",
        "npwp": "50.970.5-000.000",
        "phoneNumber": "+62 121-7825-2399",
        "email": "Isabella_Fay@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "191",
        "name": "Paula Sipes",
        "npwp": "29.644.6-000.000",
        "phoneNumber": "+62 597-7094-6691",
        "email": "Zack_Krajcik@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "192",
        "name": "Dr. Pedro Collins",
        "npwp": "98.564.3-000.000",
        "phoneNumber": "+62 542-8741-7024",
        "email": "Rossie93@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "193",
        "name": "Tyrone Koepp",
        "npwp": "11.197.2-000.000",
        "phoneNumber": "+62 858-4503-3303",
        "email": "Reagan_Ernser39@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "194",
        "name": "George Halvorson",
        "npwp": "05.625.0-000.000",
        "phoneNumber": "+62 964-9213-6613",
        "email": "Monica15@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "195",
        "name": "Ann Bednar",
        "npwp": "01.719.7-000.000",
        "phoneNumber": "+62 636-2917-5421",
        "email": "Damien57@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "196",
        "name": "Naomi Jacobs",
        "npwp": "30.099.2-000.000",
        "phoneNumber": "+62 810-6674-1380",
        "email": "Ruth.Altenwerth@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "197",
        "name": "Perry Reinger",
        "npwp": "30.420.6-000.000",
        "phoneNumber": "+62 005-1163-5461",
        "email": "Lesley.Heidenreich60@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "198",
        "name": "Mrs. Annette Yundt",
        "npwp": "68.531.9-000.000",
        "phoneNumber": "+62 825-9581-1345",
        "email": "Adolfo.Luettgen@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "199",
        "name": "Alvin Morar",
        "npwp": "08.444.2-000.000",
        "phoneNumber": "+62 398-1094-2686",
        "email": "Henry_Tillman@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "200",
        "name": "Mr. Leroy Harber-Bahringer",
        "npwp": "62.233.6-000.000",
        "phoneNumber": "+62 035-3944-6683",
        "email": "Coleman_Huels@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "201",
        "name": "Fernando Kuhlman",
        "npwp": "76.832.1-000.000",
        "phoneNumber": "+62 321-5909-7253",
        "email": "Ines_Gutmann69@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "202",
        "name": "Shane Effertz",
        "npwp": "26.824.2-000.000",
        "phoneNumber": "+62 431-3538-6673",
        "email": "Cornell.Jast@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "203",
        "name": "Donald Pollich-Schuppe DDS",
        "npwp": "54.930.1-000.000",
        "phoneNumber": "+62 151-9525-2595",
        "email": "Whitney_Boehm@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "204",
        "name": "Virgil Bartell",
        "npwp": "13.167.0-000.000",
        "phoneNumber": "+62 996-4431-1389",
        "email": "Gabe65@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "205",
        "name": "Keith Lesch",
        "npwp": "80.884.8-000.000",
        "phoneNumber": "+62 334-2875-7094",
        "email": "Rhiannon47@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "206",
        "name": "Leon Nader",
        "npwp": "10.128.2-000.000",
        "phoneNumber": "+62 323-0324-7873",
        "email": "Kyra.Hegmann@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "207",
        "name": "Mrs. Mary Johnson-Fisher",
        "npwp": "18.959.2-000.000",
        "phoneNumber": "+62 475-4254-4222",
        "email": "Diamond_Hane@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "208",
        "name": "Gordon Mante",
        "npwp": "30.303.7-000.000",
        "phoneNumber": "+62 755-0308-8950",
        "email": "Wellington98@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "209",
        "name": "Felix Cummerata",
        "npwp": "28.962.4-000.000",
        "phoneNumber": "+62 652-1181-7469",
        "email": "Milo26@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "210",
        "name": "Tiffany Hackett",
        "npwp": "07.375.3-000.000",
        "phoneNumber": "+62 351-5775-7644",
        "email": "Clement.Nikolaus@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "211",
        "name": "Darla Kirlin",
        "npwp": "40.015.7-000.000",
        "phoneNumber": "+62 591-6858-1990",
        "email": "Brock.Lindgren17@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "212",
        "name": "Mr. Dustin Labadie",
        "npwp": "21.899.9-000.000",
        "phoneNumber": "+62 987-2521-0876",
        "email": "Lisa_Dietrich@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "213",
        "name": "Pedro Towne",
        "npwp": "99.715.4-000.000",
        "phoneNumber": "+62 317-3538-2904",
        "email": "Mac.Walker@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "214",
        "name": "Ross Jacobi",
        "npwp": "65.887.6-000.000",
        "phoneNumber": "+62 302-5139-5147",
        "email": "Jose.Lang@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "215",
        "name": "Elisa Rodriguez",
        "npwp": "13.030.0-000.000",
        "phoneNumber": "+62 809-8899-4709",
        "email": "Peter.Wisozk85@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "216",
        "name": "Dr. Nora Ondricka",
        "npwp": "11.436.7-000.000",
        "phoneNumber": "+62 805-2984-1519",
        "email": "Vinnie_Schneider@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "217",
        "name": "Hubert Keeling",
        "npwp": "91.244.8-000.000",
        "phoneNumber": "+62 203-8947-1942",
        "email": "Christelle_Hickle5@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "218",
        "name": "Mr. Travis Sauer",
        "npwp": "33.846.3-000.000",
        "phoneNumber": "+62 171-8187-1778",
        "email": "Melyna58@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "219",
        "name": "Leonard Schneider MD",
        "npwp": "05.238.5-000.000",
        "phoneNumber": "+62 858-5195-8493",
        "email": "Cruz.Gulgowski@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "220",
        "name": "Mike Mante",
        "npwp": "03.977.9-000.000",
        "phoneNumber": "+62 756-2986-3081",
        "email": "Maggie_Smitham14@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "221",
        "name": "Glenda Veum MD",
        "npwp": "82.253.6-000.000",
        "phoneNumber": "+62 786-6836-4238",
        "email": "Sebastian_Schultz@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "222",
        "name": "Dr. Nicholas Boyer Jr.",
        "npwp": "63.432.9-000.000",
        "phoneNumber": "+62 025-9045-8954",
        "email": "Dakota.Kemmer@yahoo.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "223",
        "name": "Jill Crona",
        "npwp": "08.448.7-000.000",
        "phoneNumber": "+62 337-5102-1604",
        "email": "Vicente_Bradtke30@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "224",
        "name": "Angel Walsh",
        "npwp": "17.964.3-000.000",
        "phoneNumber": "+62 456-2734-0028",
        "email": "Monica1@yahoo.com",
        "role": "property-advisor"
    },
    {
        "id": "225",
        "name": "Arnold Lesch",
        "npwp": "84.281.8-000.000",
        "phoneNumber": "+62 287-2619-5520",
        "email": "Marlene.Mann@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "226",
        "name": "Tiffany Wilkinson",
        "npwp": "07.628.2-000.000",
        "phoneNumber": "+62 204-3935-8504",
        "email": "Jammie_Dooley26@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "227",
        "name": "Luis Wyman",
        "npwp": "90.675.4-000.000",
        "phoneNumber": "+62 795-2682-7129",
        "email": "Ellen.Friesen1@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "228",
        "name": "Dexter Bartoletti-O'Hara",
        "npwp": "58.714.0-000.000",
        "phoneNumber": "+62 026-2038-9563",
        "email": "Keshawn.Turcotte24@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "229",
        "name": "Miss Brandi Corkery",
        "npwp": "37.655.6-000.000",
        "phoneNumber": "+62 872-7636-0895",
        "email": "Chelsea.Friesen34@gmail.com",
        "role": "property-agent"
    },
    {
        "id": "230",
        "name": "Mr. Kristopher Hahn",
        "npwp": "24.778.0-000.000",
        "phoneNumber": "+62 294-8944-1556",
        "email": "Clair83@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "231",
        "name": "Alexandra Parker",
        "npwp": "01.575.4-000.000",
        "phoneNumber": "+62 730-1935-2546",
        "email": "Gerhard67@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "232",
        "name": "Benny Jacobi",
        "npwp": "86.771.4-000.000",
        "phoneNumber": "+62 201-9638-6496",
        "email": "Christ_Keeling@gmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "233",
        "name": "Eva McClure",
        "npwp": "69.506.7-000.000",
        "phoneNumber": "+62 589-0410-2100",
        "email": "Alessandra99@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "234",
        "name": "Josh Yost",
        "npwp": "36.276.2-000.000",
        "phoneNumber": "+62 685-2874-5560",
        "email": "Lucile.Kirlin17@gmail.com",
        "role": "property-advisor"
    },
    {
        "id": "235",
        "name": "Sheri Mayer",
        "npwp": "15.265.5-000.000",
        "phoneNumber": "+62 728-0548-9119",
        "email": "Jillian.Hayes71@yahoo.com",
        "role": "property-agent"
    },
    {
        "id": "236",
        "name": "Pat Fahey",
        "npwp": "78.547.8-000.000",
        "phoneNumber": "+62 247-6106-2322",
        "email": "Unique_Thompson56@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "237",
        "name": "Dr. Terri Goldner",
        "npwp": "20.289.0-000.000",
        "phoneNumber": "+62 886-3237-5516",
        "email": "Jada87@hotmail.com",
        "role": "property-advisor"
    },
    {
        "id": "238",
        "name": "Zachary Blick",
        "npwp": "23.889.4-000.000",
        "phoneNumber": "+62 839-2557-2788",
        "email": "Liliana_Rogahn92@hotmail.com",
        "role": "property-agent"
    },
    {
        "id": "239",
        "name": "Terrell Schamberger",
        "npwp": "15.079.6-000.000",
        "phoneNumber": "+62 686-9470-8933",
        "email": "Thalia_Reinger@hotmail.com",
        "role": "property-owner-buyer"
    },
    {
        "id": "240",
        "name": "George Wuckert",
        "npwp": "96.770.3-000.000",
        "phoneNumber": "+62 428-0593-4049",
        "email": "Nigel.Miller@yahoo.com",
        "role": "property-agent"
    },
];

/**
 * Workload module for the benchmark round.
 */
class CreateUserWorkload extends WorkloadModuleBase {
    /**
     * Initializes the workload module instance.
     */
    constructor() {
        super();
        this.txIndex = -1;
    }

    /**
     * Assemble TXs for the round.
     * @return {Promise<TxStatus[]>}
     */
    async submitTransaction() {
        this.txIndex += 1;

        const Id = users[this.txIndex].id;
        const Name = users[this.txIndex].name;
        const NPWPNumber = users[this.txIndex].npwp;
        const PhoneNumber = users[this.txIndex].phoneNumber;
        const Email = users[this.txIndex].email;

        const args = {
            contractId: 'real_estate',
            contractVersion: 'v1',
            contractFunction: 'User_Create',
            contractArguments: [Id, Name, NPWPNumber, PhoneNumber, Email],
            timeout: 30
        };

        await this.sutAdapter.sendRequests(args);
    }
}

/**
 * Create a new instance of the workload module.
 * @return {WorkloadModuleInterface}
 */
function createWorkloadModule() {
    return new CreateUserWorkload();
}

module.exports.createWorkloadModule = createWorkloadModule;