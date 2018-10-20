import React, { Component } from 'react';

import Header from './Header';
import Main from './Main';

class App extends Component {

  state = {
    "isFiltered": false,
    "pendingGuest": "",
    "guests": [
        {
            "name": "Ray Christoffels",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Dix McColgan",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Adi Hinkley",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Sheryl Canwell",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Doy English",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Andris Millgate",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Mollie Francais",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Gherardo Pennacci",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Lynnette Coogan",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Magda Klebes",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Klemens Snawdon",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Modesty Morfey",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Wileen Scoular",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Joni Paolillo",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Gwynne Kohlert",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Ingrim Beers",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Mayer McGrill",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Beret Corradeschi",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Adriane Bleier",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Bertrando Bus",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Bord Menpes",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Clarita Greest",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Latashia Ewin",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Barry Metzig",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Kelley Ballingal",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Amanda Forestel",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Christina Hearsey",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Bobbette Currm",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Daron Humpatch",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Rolf Weekes",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Obed Ewers",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Steffie Jopling",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Peyter Beevens",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Johnette Lattka",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Brose Worviell",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Felizio Bamell",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Osbert Yousef",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Alick Raitt",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Diane-marie Lammerding",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Fritz Moscone",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Rivkah McPhelimey",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Kary Bluschke",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Amerigo Nansom",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Adolpho Shakesby",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Pier Dulany",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Avery Elcox",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Sadella House",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Donica Aurelius",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Haily Denisyuk",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Chad d' Elboux",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Ezra Libreros",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Leigh Mattiazzo",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Leontyne Sturt",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Fran Feavearyear",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Vernor Breede",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Barth Wickey",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Lowell Gass",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Eula Sazio",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Laureen Schubuser",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Nelly Vice",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Chrisy Magnay",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Sheridan Metterick",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Henka Doogue",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Twyla Tunnow",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Lyda OIlier",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Elana Berrygun",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Jackelyn Hardiman",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Erna Davidowich",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Ynes Bover",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Bar Bergin",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Josephina Pfaff",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Myrlene MacKibbon",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Julee Gouldbourn",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Audrie Kingsworth",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Burl Nowaczyk",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Mortimer Unwin",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Carl Trustey",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Cindra Ife",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Tamas Bowery",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Wade Tysack",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Pincus Gilhouley",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Boonie Kelston",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Kathrine Bullivent",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Andras Ritson",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Jennie Bentz",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Clim Marmon",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Berna Nimmo",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Kiri Korda",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Simona Pomeroy",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Patricio Cymper",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Bowie Blumson",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Nannie Barnwille",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Kingsley Sherwen",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Clea Guillford",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Marten Graffin",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Annabella Cleugh",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Edmon Sedgeworth",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Frank Moreman",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Fayth Davidovits",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Maury Rumgay",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Drucill Hayer",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Fionnula Yeats",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Constanta Styan",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Zared Wheelwright",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Durante Van T'Hoog",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Orella Ingry",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Ibby Gilliatt",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Rebeka Emby",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Taylor Heinrici",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Bard Mc Ilory",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Lorrie Yerborn",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Rosina Hoonahan",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Katleen Guirau",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Ronnie Norcliffe",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Ronna Danson",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Krishnah Brydson",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Norry Nuscha",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Correna O'Howbane",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Bondon Mitten",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Kore Swynfen",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Alla McCaughan",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Kissee Klimt",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Ilsa Phythian",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Illa McCarver",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Arlee Cridge",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Jere Klimp",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Nolan Ruddle",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Reginauld Chavrin",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Nanine Lowton",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Aurel Pates",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Therine Olekhov",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Charmian Eppson",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Mariquilla Stormouth",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Adella Andreou",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Cully Haseman",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Price Slinn",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Hailee Gillford",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Roarke Jirzik",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Ignace Cerro",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Mano Audley",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Eloise Dorr",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Emmott Giacoppo",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Harli Gilvear",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Wilhelmina Urian",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Karlee Gyde",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Kathy Astlet",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Findlay Cogdon",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Aubrie Cancutt",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Latia Ramble",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Claiborne Cudby",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Barbie Tapton",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Eden Bootman",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Heinrick Stockport",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "See Bolmann",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Moria Benoi",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Ketty Woodvine",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Ruthie Canellas",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Rubetta Gerran",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Marlene Treace",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Selene Spinelli",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Latia Jina",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Kristy Auld",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Mose Boriston",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Napoleon Hullyer",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Mic Blandford",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Phylys Terron",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Sandy Freezer",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Kettie Smardon",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Karlyn Tucsell",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Quillan Chanders",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Rosamond Tuffrey",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Michele Fitzsymon",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Merrili Boocock",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Stormie Tatters",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Stinky Gurr",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Jaine Posse",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Iver Breissan",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Wynne Hookes",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Phyllis July",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Wenonah Burnitt",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Fredia Eltone",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Leonora Smorthit",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Bruno Lowry",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Arney Carwithen",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Stearn Bunker",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Wilburt Wickendon",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Vilhelmina Breton",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Koressa Redholls",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Amery Craighead",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Morgana Guilford",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Spenser Gritsaev",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Aurie Hachard",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Zacherie Eustis",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Lavena Raper",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Herby Lesor",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Carlen Ancliffe",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Deana Lokier",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Lexy Jerdein",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Stephan Brands",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Suzy Orringe",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Nealy McGuigan",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Elonore Dickson",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Kylie Hendricks",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Shayla Frantsev",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Carlin Ambrogini",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Daryl Cowill",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Jenifer Fox",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Lacy Canedo",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Brynn Sherborne",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Barbette Busch",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Wandis Gilfoyle",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Aretha Heathfield",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Anatola Cockhill",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Filberte Ong",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Mallorie Gumn",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Trumann Hubber",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Belva Simondson",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Matty Wooles",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Sigfrid Nisbith",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Melvin Roscow",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Krispin Baythrop",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Craggie Finnigan",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Allis Tilling",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Nanice Bryce",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Lanie Blacklawe",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Arnold Knewstub",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Byrle Wreford",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Bernardina Allmark",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Wilek Tustin",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Vergil Hanham",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Timmy Ramsdale",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Devlen McGriele",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Waiter Biagioni",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Gale Pizzie",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Karalynn Le Hucquet",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Sterne Dysart",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Ruthy Buckel",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Minne Foulger",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Kendra Wyke",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Cristina Hillum",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Jaimie Millward",
            "isConfirmed": true,
            "isEditing": false
        },
        {
            "name": "Brewster Flagg",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Arnoldo Childes",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Aindrea Carpenter",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Cathrin Lindeman",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Corbin Greer",
            "isConfirmed": false,
            "isEditing": true
        },
        {
            "name": "Townsend Fretter",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Celina Brierton",
            "isConfirmed": false,
            "isEditing": false
        },
        {
            "name": "Dorolisa Verrillo",
            "isConfirmed": true,
            "isEditing": true
        },
        {
            "name": "Eleanor McSperron",
            "isConfirmed": false,
            "isEditing": true
        }
    ]
}

  toggleGuestPropertyAt = (property, indexChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexChange) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        } else {
          return guest;
        }
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt('isConfirmed', index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt('isEditing', index);

  setNameAt = (name, indexChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexChange) {
          return {
            ...guest,
            name
          }
        } else {
          return guest;
        }
      })
    });

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    });
  }

  nameInputHandler = (e) => {
    this.setState({
      pendingGuest: e.target.value
    })
  }

  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    }
    )
  }

  removeGuestAt = (index) => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });
  }

  getTotalInvited = () => this.state.guests.length;

  getAttendingGuests = () => this.state.guests.reduce(
    (total, guest) => guest.isConfirmed ? total + 1 : total,
    0
  );

  render() {
    const total = this.getTotalInvited();
    const attending = this.getAttendingGuests();
    const unConfirmed = total - attending;
    return (
      <div className="App">

        <Header
          addNewGuest={this.newGuestSubmitHandler}
          addPendingGuest={this.nameInputHandler}
          pendingGuest={this.state.pendingGuest} />

        <Main 
          handleToggleFilter={this.toggleFilter}
          isItFiltered={this.state.isFiltered}
          totalGuests={total}
          attendingGuests={attending}
          unconfirmedGuests={unConfirmed}
          guestsList={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          isFiltered={this.state.isFiltered}
          removeGuest={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}/>
      </div>
    );
  }
}

export default App;
