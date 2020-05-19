// Quelle:
// https://npgeo-corona-npgeo-de.hub.arcgis.com/datasets/917fc37a709542548cc3be077a786c17_0
// https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=EWZ,cases,deaths,cases_per_100k,BL,BL_ID,county,last_update,cases7_per_100k,OBJECTID&returnGeometry=false&outSR=4326&f=json

export const bcData = {
  objectIdFieldName: 'OBJECTID',
  uniqueIdField: { name: 'OBJECTID', isSystemMaintained: true },
  globalIdFieldName: '',
  geometryType: 'esriGeometryPolygon',
  spatialReference: { wkid: 4326, latestWkid: 4326 },
  fields: [
    {
      name: 'EWZ',
      type: 'esriFieldTypeInteger',
      alias: 'EWZ',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'cases',
      type: 'esriFieldTypeInteger',
      alias: 'Anzahl Fälle',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'deaths',
      type: 'esriFieldTypeInteger',
      alias: 'Anzahl Todesfälle',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'cases_per_100k',
      type: 'esriFieldTypeDouble',
      alias: 'Fälle pro 100.000 Einwohner',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'BL',
      type: 'esriFieldTypeString',
      alias: 'Bundesland',
      sqlType: 'sqlTypeOther',
      length: 256,
      domain: null,
      defaultValue: null
    },
    {
      name: 'BL_ID',
      type: 'esriFieldTypeString',
      alias: 'Bundesland ID',
      sqlType: 'sqlTypeOther',
      length: 256,
      domain: null,
      defaultValue: null
    },
    {
      name: 'county',
      type: 'esriFieldTypeString',
      alias: 'Landkreis',
      sqlType: 'sqlTypeOther',
      length: 256,
      domain: null,
      defaultValue: null
    },
    {
      name: 'last_update',
      type: 'esriFieldTypeString',
      alias: 'Aktualisierung',
      sqlType: 'sqlTypeOther',
      length: 256,
      domain: null,
      defaultValue: null
    },
    {
      name: 'cases7_per_100k',
      type: 'esriFieldTypeDouble',
      alias: 'Inzidenzen der letzten 7 Tage',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    },
    {
      name: 'OBJECTID',
      type: 'esriFieldTypeOID',
      alias: 'OBJECTID',
      sqlType: 'sqlTypeOther',
      domain: null,
      defaultValue: null
    }
  ],
  features: [
    {
      attributes: {
        EWZ: 89504,
        cases: 33,
        deaths: 1,
        cases_per_100k: 36.869860564891,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'SK Flensburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.23453700393279,
        OBJECTID: 1
      }
    },
    {
      attributes: {
        EWZ: 247548,
        cases: 207,
        deaths: 7,
        cases_per_100k: 83.6201463958505,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'SK Kiel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.9267859162667,
        OBJECTID: 2
      }
    },
    {
      attributes: {
        EWZ: 217198,
        cases: 151,
        deaths: 1,
        cases_per_100k: 69.5218188012781,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'SK Lübeck',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.5747382572584,
        OBJECTID: 3
      }
    },
    {
      attributes: {
        EWZ: 79487,
        cases: 42,
        deaths: 1,
        cases_per_100k: 52.8388289909042,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'SK Neumünster',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.54840414155774,
        OBJECTID: 4
      }
    },
    {
      attributes: {
        EWZ: 133210,
        cases: 54,
        deaths: 2,
        cases_per_100k: 40.537497184896,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Dithmarschen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.75347196156445,
        OBJECTID: 5
      }
    },
    {
      attributes: {
        EWZ: 197264,
        cases: 212,
        deaths: 5,
        cases_per_100k: 107.470192229702,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Herzogtum Lauenburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.2496552842891,
        OBJECTID: 6
      }
    },
    {
      attributes: {
        EWZ: 165507,
        cases: 68,
        deaths: 1,
        cases_per_100k: 41.0858755218812,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Nordfriesland',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.64624456971608,
        OBJECTID: 7
      }
    },
    {
      attributes: {
        EWZ: 200581,
        cases: 58,
        deaths: 0,
        cases_per_100k: 28.9159990228387,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Ostholstein',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.99420682916129,
        OBJECTID: 8
      }
    },
    {
      attributes: {
        EWZ: 314391,
        cases: 477,
        deaths: 13,
        cases_per_100k: 151.721900436081,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Pinneberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.0868599928115,
        OBJECTID: 9
      }
    },
    {
      attributes: {
        EWZ: 128647,
        cases: 101,
        deaths: 3,
        cases_per_100k: 78.509409469323,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Plön',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.32785063001858,
        OBJECTID: 10
      }
    },
    {
      attributes: {
        EWZ: 272775,
        cases: 201,
        deaths: 10,
        cases_per_100k: 73.6871047566676,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Rendsburg-Eckernförde',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.23224269086243,
        OBJECTID: 11
      }
    },
    {
      attributes: {
        EWZ: 200025,
        cases: 112,
        deaths: 3,
        cases_per_100k: 55.9930008748906,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Schleswig-Flensburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.49943757030371,
        OBJECTID: 12
      }
    },
    {
      attributes: {
        EWZ: 276032,
        cases: 200,
        deaths: 2,
        cases_per_100k: 72.4553674936239,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Segeberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.1437514491074,
        OBJECTID: 13
      }
    },
    {
      attributes: {
        EWZ: 131347,
        cases: 75,
        deaths: 2,
        cases_per_100k: 57.100657038227,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Steinburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.56805256305816,
        OBJECTID: 14
      }
    },
    {
      attributes: {
        EWZ: 243196,
        cases: 303,
        deaths: 4,
        cases_per_100k: 124.590864981332,
        BL: 'Schleswig-Holstein',
        BL_ID: '1',
        county: 'LK Stormarn',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 37.4183785917532,
        OBJECTID: 15
      }
    },
    {
      attributes: {
        EWZ: 1841179,
        cases: 3953,
        deaths: 80,
        cases_per_100k: 214.699385556755,
        BL: 'Hamburg',
        BL_ID: '2',
        county: 'SK Hamburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 24.9296782116242,
        OBJECTID: 16
      }
    },
    {
      attributes: {
        EWZ: 248292,
        cases: 277,
        deaths: 7,
        cases_per_100k: 111.562192901906,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Braunschweig',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.6935543634108,
        OBJECTID: 17
      }
    },
    {
      attributes: {
        EWZ: 104948,
        cases: 100,
        deaths: 5,
        cases_per_100k: 95.2852841407173,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Salzgitter',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.4813812554789,
        OBJECTID: 18
      }
    },
    {
      attributes: {
        EWZ: 124151,
        cases: 253,
        deaths: 42,
        cases_per_100k: 203.784101618191,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Wolfsburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.9148859050672,
        OBJECTID: 19
      }
    },
    {
      attributes: {
        EWZ: 175920,
        cases: 110,
        deaths: 2,
        cases_per_100k: 62.5284220100045,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Gifhorn',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.4106412005457,
        OBJECTID: 20
      }
    },
    {
      attributes: {
        EWZ: 137014,
        cases: 127,
        deaths: 6,
        cases_per_100k: 92.6912578276672,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Goslar',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.1657202913571,
        OBJECTID: 21
      }
    },
    {
      attributes: {
        EWZ: 91307,
        cases: 82,
        deaths: 0,
        cases_per_100k: 89.8069151324652,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Helmstedt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 22
      }
    },
    {
      attributes: {
        EWZ: 132765,
        cases: 77,
        deaths: 0,
        cases_per_100k: 57.997213120928,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Northeim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.8174217602531,
        OBJECTID: 23
      }
    },
    {
      attributes: {
        EWZ: 133965,
        cases: 127,
        deaths: 5,
        cases_per_100k: 94.8008808270817,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Peine',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.47878177135819,
        OBJECTID: 24
      }
    },
    {
      attributes: {
        EWZ: 119960,
        cases: 113,
        deaths: 1,
        cases_per_100k: 94.1980660220073,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Wolfenbüttel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.3411137045682,
        OBJECTID: 25
      }
    },
    {
      attributes: {
        EWZ: 328074,
        cases: 454,
        deaths: 11,
        cases_per_100k: 138.383413498174,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Göttingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 36.8819229807909,
        OBJECTID: 26
      }
    },
    {
      attributes: {
        EWZ: 1157624,
        cases: 1501,
        deaths: 32,
        cases_per_100k: 129.662135546602,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'Region Hannover',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.3631507294251,
        OBJECTID: 27
      }
    },
    {
      attributes: {
        EWZ: 216886,
        cases: 262,
        deaths: 13,
        cases_per_100k: 120.800789354776,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Diepholz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.832151452837,
        OBJECTID: 28
      }
    },
    {
      attributes: {
        EWZ: 148559,
        cases: 97,
        deaths: 4,
        cases_per_100k: 65.2939236263034,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Hameln-Pyrmont',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.03879939956516,
        OBJECTID: 29
      }
    },
    {
      attributes: {
        EWZ: 276594,
        cases: 223,
        deaths: 1,
        cases_per_100k: 80.6235854718468,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Hildesheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.95389632457682,
        OBJECTID: 30
      }
    },
    {
      attributes: {
        EWZ: 70975,
        cases: 95,
        deaths: 2,
        cases_per_100k: 133.849947164495,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Holzminden',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.63578724903135,
        OBJECTID: 31
      }
    },
    {
      attributes: {
        EWZ: 121386,
        cases: 61,
        deaths: 1,
        cases_per_100k: 50.2529121974528,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Nienburg (Weser)',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.94290939647076,
        OBJECTID: 32
      }
    },
    {
      attributes: {
        EWZ: 157781,
        cases: 125,
        deaths: 4,
        cases_per_100k: 79.2237341631755,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Schaumburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.6757974661081,
        OBJECTID: 33
      }
    },
    {
      attributes: {
        EWZ: 178936,
        cases: 135,
        deaths: 9,
        cases_per_100k: 75.4459695086511,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Celle',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.1771806679483,
        OBJECTID: 34
      }
    },
    {
      attributes: {
        EWZ: 198213,
        cases: 78,
        deaths: 3,
        cases_per_100k: 39.3516066050158,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Cuxhaven',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.02704666192429,
        OBJECTID: 35
      }
    },
    {
      attributes: {
        EWZ: 252776,
        cases: 382,
        deaths: 7,
        cases_per_100k: 151.121941956515,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Harburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.7364306737981,
        OBJECTID: 36
      }
    },
    {
      attributes: {
        EWZ: 48424,
        cases: 15,
        deaths: 2,
        cases_per_100k: 30.9763753510656,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Lüchow-Dannenberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.06509169007104,
        OBJECTID: 37
      }
    },
    {
      attributes: {
        EWZ: 183372,
        cases: 144,
        deaths: 0,
        cases_per_100k: 78.5288920882141,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Lüneburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.99873481229413,
        OBJECTID: 38
      }
    },
    {
      attributes: {
        EWZ: 113517,
        cases: 72,
        deaths: 0,
        cases_per_100k: 63.4266233251407,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Osterholz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.0474025916823,
        OBJECTID: 39
      }
    },
    {
      attributes: {
        EWZ: 163455,
        cases: 83,
        deaths: 1,
        cases_per_100k: 50.7785017283044,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Rotenburg (Wümme)',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.34147012939341,
        OBJECTID: 40
      }
    },
    {
      attributes: {
        EWZ: 139755,
        cases: 57,
        deaths: 1,
        cases_per_100k: 40.7856606203714,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Heidekreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.7243032449644,
        OBJECTID: 41
      }
    },
    {
      attributes: {
        EWZ: 203102,
        cases: 177,
        deaths: 5,
        cases_per_100k: 87.1483294108379,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Stade',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.89308820198718,
        OBJECTID: 42
      }
    },
    {
      attributes: {
        EWZ: 92572,
        cases: 34,
        deaths: 0,
        cases_per_100k: 36.7281683446398,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Uelzen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.24072073629175,
        OBJECTID: 43
      }
    },
    {
      attributes: {
        EWZ: 136792,
        cases: 107,
        deaths: 1,
        cases_per_100k: 78.220948593485,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Verden',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0.73103690274285,
        OBJECTID: 44
      }
    },
    {
      attributes: {
        EWZ: 77607,
        cases: 30,
        deaths: 2,
        cases_per_100k: 38.6563067764506,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Delmenhorst',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.86563067764506,
        OBJECTID: 45
      }
    },
    {
      attributes: {
        EWZ: 50195,
        cases: 15,
        deaths: 0,
        cases_per_100k: 29.8834545273434,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Emden',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.99223030182289,
        OBJECTID: 46
      }
    },
    {
      attributes: {
        EWZ: 168210,
        cases: 149,
        deaths: 0,
        cases_per_100k: 88.5797515010998,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Oldenburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.32292967124428,
        OBJECTID: 47
      }
    },
    {
      attributes: {
        EWZ: 164748,
        cases: 390,
        deaths: 8,
        cases_per_100k: 236.72518027533,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Osnabrück',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.672518027533,
        OBJECTID: 48
      }
    },
    {
      attributes: {
        EWZ: 76278,
        cases: 16,
        deaths: 0,
        cases_per_100k: 20.97590393036,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'SK Wilhelmshaven',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.621987991295,
        OBJECTID: 49
      }
    },
    {
      attributes: {
        EWZ: 124071,
        cases: 138,
        deaths: 3,
        cases_per_100k: 111.226636361438,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Ammerland',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.4778715412949,
        OBJECTID: 50
      }
    },
    {
      attributes: {
        EWZ: 189848,
        cases: 70,
        deaths: 3,
        cases_per_100k: 36.8716025451941,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Aurich',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0.526737179217058,
        OBJECTID: 51
      }
    },
    {
      attributes: {
        EWZ: 169348,
        cases: 84,
        deaths: 0,
        cases_per_100k: 49.6020029761202,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Cloppenburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.3530009211801,
        OBJECTID: 52
      }
    },
    {
      attributes: {
        EWZ: 325657,
        cases: 321,
        deaths: 12,
        cases_per_100k: 98.5699677881943,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Emsland',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.3374378563949,
        OBJECTID: 53
      }
    },
    {
      attributes: {
        EWZ: 98460,
        cases: 27,
        deaths: 1,
        cases_per_100k: 27.4223034734918,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Friesland',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.06256347755434,
        OBJECTID: 54
      }
    },
    {
      attributes: {
        EWZ: 136511,
        cases: 184,
        deaths: 10,
        cases_per_100k: 134.787672788273,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Grafschaft Bentheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.4413343979606,
        OBJECTID: 55
      }
    },
    {
      attributes: {
        EWZ: 169809,
        cases: 74,
        deaths: 1,
        cases_per_100k: 43.5783733488802,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Leer',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.47786630861733,
        OBJECTID: 56
      }
    },
    {
      attributes: {
        EWZ: 130144,
        cases: 181,
        deaths: 9,
        cases_per_100k: 139.076715023359,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Oldenburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.68379641013032,
        OBJECTID: 57
      }
    },
    {
      attributes: {
        EWZ: 357343,
        cases: 789,
        deaths: 25,
        cases_per_100k: 220.796265772661,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Osnabrück',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 41.1369468549825,
        OBJECTID: 58
      }
    },
    {
      attributes: {
        EWZ: 141598,
        cases: 280,
        deaths: 8,
        cases_per_100k: 197.742905973248,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Vechta',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.6556166047543,
        OBJECTID: 59
      }
    },
    {
      attributes: {
        EWZ: 88624,
        cases: 51,
        deaths: 1,
        cases_per_100k: 57.5464885358368,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Wesermarsch',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.5134500812421,
        OBJECTID: 60
      }
    },
    {
      attributes: {
        EWZ: 56882,
        cases: 21,
        deaths: 0,
        cases_per_100k: 36.918533103618,
        BL: 'Niedersachsen',
        BL_ID: '3',
        county: 'LK Wittmund',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.75802538588657,
        OBJECTID: 61
      }
    },
    {
      attributes: {
        EWZ: 569352,
        cases: 481,
        deaths: 21,
        cases_per_100k: 84.4820076156754,
        BL: 'Bremen',
        BL_ID: '4',
        county: 'SK Bremen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.4164875156318,
        OBJECTID: 62
      }
    },
    {
      attributes: {
        EWZ: 113634,
        cases: 26,
        deaths: 0,
        cases_per_100k: 22.880475913899,
        BL: 'Bremen',
        BL_ID: '4',
        county: 'SK Bremerhaven',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 63
      }
    },
    {
      attributes: {
        EWZ: 619294,
        cases: 798,
        deaths: 13,
        cases_per_100k: 128.856407457524,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Düsseldorf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.7564613899053,
        OBJECTID: 64
      }
    },
    {
      attributes: {
        EWZ: 498590,
        cases: 574,
        deaths: 9,
        cases_per_100k: 115.124651517279,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Duisburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.2542971178724,
        OBJECTID: 65
      }
    },
    {
      attributes: {
        EWZ: 583109,
        cases: 517,
        deaths: 24,
        cases_per_100k: 88.6626685576796,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Essen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.63035212970474,
        OBJECTID: 66
      }
    },
    {
      attributes: {
        EWZ: 227020,
        cases: 299,
        deaths: 2,
        cases_per_100k: 131.70645758083,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Krefeld',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.8932252664963,
        OBJECTID: 67
      }
    },
    {
      attributes: {
        EWZ: 261454,
        cases: 372,
        deaths: 17,
        cases_per_100k: 142.281242589519,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Mönchengladbach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.8887758458467,
        OBJECTID: 68
      }
    },
    {
      attributes: {
        EWZ: 170880,
        cases: 134,
        deaths: 4,
        cases_per_100k: 78.4176029962547,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Mülheim a.d.Ruhr',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.94850187265918,
        OBJECTID: 69
      }
    },
    {
      attributes: {
        EWZ: 210829,
        cases: 144,
        deaths: 0,
        cases_per_100k: 68.3017990883607,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Oberhausen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.11477073837091,
        OBJECTID: 70
      }
    },
    {
      attributes: {
        EWZ: 110994,
        cases: 165,
        deaths: 2,
        cases_per_100k: 148.656684145089,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Remscheid',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 45.0474800439663,
        OBJECTID: 71
      }
    },
    {
      attributes: {
        EWZ: 159360,
        cases: 185,
        deaths: 2,
        cases_per_100k: 116.089357429719,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Solingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 20.7078313253012,
        OBJECTID: 72
      }
    },
    {
      attributes: {
        EWZ: 354382,
        cases: 593,
        deaths: 21,
        cases_per_100k: 167.333555316015,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Wuppertal',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 33.5795836131632,
        OBJECTID: 73
      }
    },
    {
      attributes: {
        EWZ: 310974,
        cases: 418,
        deaths: 9,
        cases_per_100k: 134.416382076958,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Kleve',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 22.5099204435097,
        OBJECTID: 74
      }
    },
    {
      attributes: {
        EWZ: 485684,
        cases: 707,
        deaths: 35,
        cases_per_100k: 145.567900116125,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Mettmann',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 25.5310036978776,
        OBJECTID: 75
      }
    },
    {
      attributes: {
        EWZ: 451007,
        cases: 512,
        deaths: 13,
        cases_per_100k: 113.523736882133,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Rhein-Kreis Neuss',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.98213774952495,
        OBJECTID: 76
      }
    },
    {
      attributes: {
        EWZ: 298935,
        cases: 409,
        deaths: 20,
        cases_per_100k: 136.81904092863,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Viersen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.7296067707027,
        OBJECTID: 77
      }
    },
    {
      attributes: {
        EWZ: 459809,
        cases: 396,
        deaths: 13,
        cases_per_100k: 86.1227161712798,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Wesel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.1363044220535,
        OBJECTID: 78
      }
    },
    {
      attributes: {
        EWZ: 327258,
        cases: 538,
        deaths: 5,
        cases_per_100k: 164.396286721791,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Bonn',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 27.1956682495157,
        OBJECTID: 79
      }
    },
    {
      attributes: {
        EWZ: 1085664,
        cases: 2085,
        deaths: 56,
        cases_per_100k: 192.048368556017,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Köln',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.4347864532673,
        OBJECTID: 80
      }
    },
    {
      attributes: {
        EWZ: 163838,
        cases: 157,
        deaths: 3,
        cases_per_100k: 95.826365067933,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Leverkusen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.88287210537238,
        OBJECTID: 81
      }
    },
    {
      attributes: {
        EWZ: 555465,
        cases: 1512,
        deaths: 55,
        cases_per_100k: 272.204369312198,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'StadtRegion Aachen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 26.104254993564,
        OBJECTID: 82
      }
    },
    {
      attributes: {
        EWZ: 263722,
        cases: 454,
        deaths: 18,
        cases_per_100k: 172.150977165348,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Düren',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 26.163915031738,
        OBJECTID: 83
      }
    },
    {
      attributes: {
        EWZ: 470089,
        cases: 788,
        deaths: 32,
        cases_per_100k: 167.62783217646,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Rhein-Erft-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 29.9943202244681,
        OBJECTID: 84
      }
    },
    {
      attributes: {
        EWZ: 192840,
        cases: 283,
        deaths: 9,
        cases_per_100k: 146.753785521676,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Euskirchen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 22.2982783654843,
        OBJECTID: 85
      }
    },
    {
      attributes: {
        EWZ: 254322,
        cases: 1592,
        deaths: 52,
        cases_per_100k: 625.978090766823,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Heinsberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 29.0969715557443,
        OBJECTID: 86
      }
    },
    {
      attributes: {
        EWZ: 272471,
        cases: 370,
        deaths: 9,
        cases_per_100k: 135.794268013844,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Oberbergischer Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.80827684414121,
        OBJECTID: 87
      }
    },
    {
      attributes: {
        EWZ: 283455,
        cases: 379,
        deaths: 4,
        cases_per_100k: 133.707290398829,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Rheinisch-Bergischer Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 22.9313294879258,
        OBJECTID: 88
      }
    },
    {
      attributes: {
        EWZ: 599780,
        cases: 951,
        deaths: 13,
        cases_per_100k: 158.558137983927,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Rhein-Sieg-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 20.6742472239821,
        OBJECTID: 89
      }
    },
    {
      attributes: {
        EWZ: 117383,
        cases: 61,
        deaths: 2,
        cases_per_100k: 51.9666391215082,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Bottrop',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.0748575176985,
        OBJECTID: 90
      }
    },
    {
      attributes: {
        EWZ: 260654,
        cases: 222,
        deaths: 5,
        cases_per_100k: 85.1703791232822,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Gelsenkirchen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.5095106923354,
        OBJECTID: 91
      }
    },
    {
      attributes: {
        EWZ: 314319,
        cases: 597,
        deaths: 7,
        cases_per_100k: 189.934429671767,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Münster',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.27185120848565,
        OBJECTID: 92
      }
    },
    {
      attributes: {
        EWZ: 370676,
        cases: 801,
        deaths: 23,
        cases_per_100k: 216.091681144719,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Borken',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.5355296809073,
        OBJECTID: 93
      }
    },
    {
      attributes: {
        EWZ: 219929,
        cases: 456,
        deaths: 16,
        cases_per_100k: 207.339641429734,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Coesfeld',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.0048424718887,
        OBJECTID: 94
      }
    },
    {
      attributes: {
        EWZ: 615261,
        cases: 651,
        deaths: 5,
        cases_per_100k: 105.808754333527,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Recklinghausen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.0411240107857,
        OBJECTID: 95
      }
    },
    {
      attributes: {
        EWZ: 447614,
        cases: 1021,
        deaths: 24,
        cases_per_100k: 228.09831685336,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Steinfurt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 47.3622362124509,
        OBJECTID: 96
      }
    },
    {
      attributes: {
        EWZ: 277783,
        cases: 403,
        deaths: 6,
        cases_per_100k: 145.077272547276,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Warendorf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.4797089814711,
        OBJECTID: 97
      }
    },
    {
      attributes: {
        EWZ: 333786,
        cases: 367,
        deaths: 0,
        cases_per_100k: 109.950686967099,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Bielefeld',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 98
      }
    },
    {
      attributes: {
        EWZ: 364083,
        cases: 472,
        deaths: 13,
        cases_per_100k: 129.640768725813,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Gütersloh',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.23987936816605,
        OBJECTID: 99
      }
    },
    {
      attributes: {
        EWZ: 250783,
        cases: 278,
        deaths: 1,
        cases_per_100k: 110.852809002205,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Herford',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.96877778796808,
        OBJECTID: 100
      }
    },
    {
      attributes: {
        EWZ: 140667,
        cases: 230,
        deaths: 1,
        cases_per_100k: 163.506721548053,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Höxter',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 43.3648261497011,
        OBJECTID: 101
      }
    },
    {
      attributes: {
        EWZ: 348391,
        cases: 549,
        deaths: 11,
        cases_per_100k: 157.581567836138,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Lippe',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.4998263445382,
        OBJECTID: 102
      }
    },
    {
      attributes: {
        EWZ: 310710,
        cases: 380,
        deaths: 3,
        cases_per_100k: 122.300537478678,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Minden-Lübbecke',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.9082102281871,
        OBJECTID: 103
      }
    },
    {
      attributes: {
        EWZ: 306890,
        cases: 494,
        deaths: 18,
        cases_per_100k: 160.969728567239,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Paderborn',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.7870246668187,
        OBJECTID: 104
      }
    },
    {
      attributes: {
        EWZ: 364628,
        cases: 307,
        deaths: 7,
        cases_per_100k: 84.1953991465274,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Bochum',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.0670930372873,
        OBJECTID: 105
      }
    },
    {
      attributes: {
        EWZ: 587010,
        cases: 558,
        deaths: 3,
        cases_per_100k: 95.0580058261358,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Dortmund',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.4137748931023,
        OBJECTID: 106
      }
    },
    {
      attributes: {
        EWZ: 188814,
        cases: 182,
        deaths: 2,
        cases_per_100k: 96.3911574353597,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Hagen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 25.4218437192157,
        OBJECTID: 107
      }
    },
    {
      attributes: {
        EWZ: 179111,
        cases: 333,
        deaths: 12,
        cases_per_100k: 185.91822947781,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Hamm',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.7742070559597,
        OBJECTID: 108
      }
    },
    {
      attributes: {
        EWZ: 156374,
        cases: 105,
        deaths: 0,
        cases_per_100k: 67.1467123690639,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'SK Herne',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.0688349725658,
        OBJECTID: 109
      }
    },
    {
      attributes: {
        EWZ: 324296,
        cases: 323,
        deaths: 6,
        cases_per_100k: 99.6003650985519,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Ennepe-Ruhr-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.86752843081629,
        OBJECTID: 110
      }
    },
    {
      attributes: {
        EWZ: 260475,
        cases: 520,
        deaths: 11,
        cases_per_100k: 199.6352816969,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Hochsauerlandkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 32.2487762741146,
        OBJECTID: 111
      }
    },
    {
      attributes: {
        EWZ: 412120,
        cases: 378,
        deaths: 11,
        cases_per_100k: 91.7208580025235,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Märkischer Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 31.7868581966418,
        OBJECTID: 112
      }
    },
    {
      attributes: {
        EWZ: 134775,
        cases: 410,
        deaths: 14,
        cases_per_100k: 304.210721572992,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Olpe',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 103.876831756631,
        OBJECTID: 113
      }
    },
    {
      attributes: {
        EWZ: 278210,
        cases: 205,
        deaths: 4,
        cases_per_100k: 73.6853456022429,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Siegen-Wittgenstein',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.2671363358614,
        OBJECTID: 114
      }
    },
    {
      attributes: {
        EWZ: 301902,
        cases: 319,
        deaths: 3,
        cases_per_100k: 105.663427204855,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Soest',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.60576610953223,
        OBJECTID: 115
      }
    },
    {
      attributes: {
        EWZ: 394782,
        cases: 429,
        deaths: 15,
        cases_per_100k: 108.667568430172,
        BL: 'Nordrhein-Westfalen',
        BL_ID: '5',
        county: 'LK Unna',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.5308702017823,
        OBJECTID: 116
      }
    },
    {
      attributes: {
        EWZ: 159207,
        cases: 123,
        deaths: 1,
        cases_per_100k: 77.2579095140289,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Darmstadt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.5622617095982,
        OBJECTID: 117
      }
    },
    {
      attributes: {
        EWZ: 753056,
        cases: 934,
        deaths: 19,
        cases_per_100k: 124.027960735988,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Frankfurt am Main',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 25.628904092126,
        OBJECTID: 118
      }
    },
    {
      attributes: {
        EWZ: 128744,
        cases: 60,
        deaths: 3,
        cases_per_100k: 46.6041135897595,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Offenbach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.76735226495992,
        OBJECTID: 119
      }
    },
    {
      attributes: {
        EWZ: 278342,
        cases: 257,
        deaths: 8,
        cases_per_100k: 92.3324543187877,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Wiesbaden',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.7781075080297,
        OBJECTID: 120
      }
    },
    {
      attributes: {
        EWZ: 269694,
        cases: 276,
        deaths: 1,
        cases_per_100k: 102.338205521814,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Bergstraße',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.7529273917848,
        OBJECTID: 121
      }
    },
    {
      attributes: {
        EWZ: 297399,
        cases: 314,
        deaths: 7,
        cases_per_100k: 105.582063154214,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Darmstadt-Dieburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.8036846122549,
        OBJECTID: 122
      }
    },
    {
      attributes: {
        EWZ: 274526,
        cases: 318,
        deaths: 3,
        cases_per_100k: 115.836022817511,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Groß-Gerau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.8489469121322,
        OBJECTID: 123
      }
    },
    {
      attributes: {
        EWZ: 236564,
        cases: 216,
        deaths: 3,
        cases_per_100k: 91.3072149608563,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Hochtaunuskreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.64990446559916,
        OBJECTID: 124
      }
    },
    {
      attributes: {
        EWZ: 418950,
        cases: 393,
        deaths: 10,
        cases_per_100k: 93.8059434300036,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Main-Kinzig-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.844134144886,
        OBJECTID: 125
      }
    },
    {
      attributes: {
        EWZ: 237735,
        cases: 196,
        deaths: 4,
        cases_per_100k: 82.4447388899405,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Main-Taunus-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.15081918943361,
        OBJECTID: 126
      }
    },
    {
      attributes: {
        EWZ: 96798,
        cases: 210,
        deaths: 30,
        cases_per_100k: 216.946631128742,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Odenwaldkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 49.5878014008554,
        OBJECTID: 127
      }
    },
    {
      attributes: {
        EWZ: 354092,
        cases: 357,
        deaths: 15,
        cases_per_100k: 100.821255492923,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Offenbach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.639223704574,
        OBJECTID: 128
      }
    },
    {
      attributes: {
        EWZ: 187157,
        cases: 180,
        deaths: 3,
        cases_per_100k: 96.1759378489717,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Rheingau-Taunus-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.13724306331048,
        OBJECTID: 129
      }
    },
    {
      attributes: {
        EWZ: 306460,
        cases: 211,
        deaths: 5,
        cases_per_100k: 68.850747242707,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Wetteraukreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.46289891013509,
        OBJECTID: 130
      }
    },
    {
      attributes: {
        EWZ: 268876,
        cases: 187,
        deaths: 0,
        cases_per_100k: 69.5487882890254,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Gießen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.71918653952008,
        OBJECTID: 131
      }
    },
    {
      attributes: {
        EWZ: 253777,
        cases: 309,
        deaths: 10,
        cases_per_100k: 121.760443223775,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Lahn-Dill-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.9440098984542,
        OBJECTID: 132
      }
    },
    {
      attributes: {
        EWZ: 172083,
        cases: 222,
        deaths: 1,
        cases_per_100k: 129.007513816007,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Limburg-Weilburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.4600686877844,
        OBJECTID: 133
      }
    },
    {
      attributes: {
        EWZ: 246648,
        cases: 167,
        deaths: 1,
        cases_per_100k: 67.7078265382245,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Marburg-Biedenkopf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.89241347993902,
        OBJECTID: 134
      }
    },
    {
      attributes: {
        EWZ: 105878,
        cases: 102,
        deaths: 4,
        cases_per_100k: 96.3372938665256,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Vogelsbergkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.3893160052135,
        OBJECTID: 135
      }
    },
    {
      attributes: {
        EWZ: 201585,
        cases: 164,
        deaths: 4,
        cases_per_100k: 81.3552595679242,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'SK Kassel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.3545402683731,
        OBJECTID: 136
      }
    },
    {
      attributes: {
        EWZ: 222584,
        cases: 281,
        deaths: 8,
        cases_per_100k: 126.244473996334,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Fulda',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.7244006757,
        OBJECTID: 137
      }
    },
    {
      attributes: {
        EWZ: 120829,
        cases: 180,
        deaths: 10,
        cases_per_100k: 148.970859644622,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Hersfeld-Rotenburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 28.9665560420098,
        OBJECTID: 138
      }
    },
    {
      attributes: {
        EWZ: 236633,
        cases: 227,
        deaths: 13,
        cases_per_100k: 95.9291392155786,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Kassel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 31.2720541936247,
        OBJECTID: 139
      }
    },
    {
      attributes: {
        EWZ: 180222,
        cases: 358,
        deaths: 19,
        cases_per_100k: 198.643894752028,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Schwalm-Eder-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 27.1886895051659,
        OBJECTID: 140
      }
    },
    {
      attributes: {
        EWZ: 156953,
        cases: 122,
        deaths: 2,
        cases_per_100k: 77.7302759424796,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Waldeck-Frankenberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.1055347779272,
        OBJECTID: 141
      }
    },
    {
      attributes: {
        EWZ: 101017,
        cases: 106,
        deaths: 3,
        cases_per_100k: 104.9328330875,
        BL: 'Hessen',
        BL_ID: '6',
        county: 'LK Werra-Meißner-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 71.2751319084907,
        OBJECTID: 142
      }
    },
    {
      attributes: {
        EWZ: 114024,
        cases: 221,
        deaths: 10,
        cases_per_100k: 193.818845155406,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Koblenz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.2941836806286,
        OBJECTID: 143
      }
    },
    {
      attributes: {
        EWZ: 129727,
        cases: 113,
        deaths: 1,
        cases_per_100k: 87.1059995220733,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Ahrweiler',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.16679642634147,
        OBJECTID: 144
      }
    },
    {
      attributes: {
        EWZ: 128705,
        cases: 97,
        deaths: 3,
        cases_per_100k: 75.3661473913212,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Altenkirchen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.762441241599,
        OBJECTID: 145
      }
    },
    {
      attributes: {
        EWZ: 158080,
        cases: 158,
        deaths: 1,
        cases_per_100k: 99.9493927125506,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Bad Kreuznach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.22368421052632,
        OBJECTID: 146
      }
    },
    {
      attributes: {
        EWZ: 80720,
        cases: 70,
        deaths: 0,
        cases_per_100k: 86.7195242814668,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Birkenfeld',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.5827552031715,
        OBJECTID: 147
      }
    },
    {
      attributes: {
        EWZ: 61587,
        cases: 122,
        deaths: 0,
        cases_per_100k: 198.093753551886,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Cochem-Zell',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.6237192914089,
        OBJECTID: 148
      }
    },
    {
      attributes: {
        EWZ: 214259,
        cases: 318,
        deaths: 6,
        cases_per_100k: 148.418502840021,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Mayen-Koblenz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.5350206992472,
        OBJECTID: 149
      }
    },
    {
      attributes: {
        EWZ: 181941,
        cases: 208,
        deaths: 3,
        cases_per_100k: 114.322774965511,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Neuwied',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.89331706432305,
        OBJECTID: 150
      }
    },
    {
      attributes: {
        EWZ: 102937,
        cases: 143,
        deaths: 1,
        cases_per_100k: 138.919921893974,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Rhein-Hunsrück-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.6576158232705,
        OBJECTID: 151
      }
    },
    {
      attributes: {
        EWZ: 122308,
        cases: 135,
        deaths: 3,
        cases_per_100k: 110.377080812375,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Rhein-Lahn-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.17608006017595,
        OBJECTID: 152
      }
    },
    {
      attributes: {
        EWZ: 201597,
        cases: 288,
        deaths: 11,
        cases_per_100k: 142.859268739118,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Westerwaldkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.8732520821242,
        OBJECTID: 153
      }
    },
    {
      attributes: {
        EWZ: 110636,
        cases: 90,
        deaths: 1,
        cases_per_100k: 81.3478433782855,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Trier',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.23091941140316,
        OBJECTID: 154
      }
    },
    {
      attributes: {
        EWZ: 112262,
        cases: 117,
        deaths: 0,
        cases_per_100k: 104.220484224404,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Bernkastel-Wittlich',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.0339206499083,
        OBJECTID: 155
      }
    },
    {
      attributes: {
        EWZ: 98561,
        cases: 142,
        deaths: 2,
        cases_per_100k: 144.073213542882,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Bitburg-Prüm',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.2044013352137,
        OBJECTID: 156
      }
    },
    {
      attributes: {
        EWZ: 60603,
        cases: 100,
        deaths: 1,
        cases_per_100k: 165.008332920813,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Vulkaneifel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.1509166212894,
        OBJECTID: 157
      }
    },
    {
      attributes: {
        EWZ: 148945,
        cases: 154,
        deaths: 3,
        cases_per_100k: 103.393870220551,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Trier-Saarburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.1274967269798,
        OBJECTID: 158
      }
    },
    {
      attributes: {
        EWZ: 48561,
        cases: 32,
        deaths: 2,
        cases_per_100k: 65.8965013076337,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Frankenthal',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.2963283293178,
        OBJECTID: 159
      }
    },
    {
      attributes: {
        EWZ: 99845,
        cases: 91,
        deaths: 1,
        cases_per_100k: 91.1412689668987,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Kaiserslautern',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.01086684360759,
        OBJECTID: 160
      }
    },
    {
      attributes: {
        EWZ: 46677,
        cases: 50,
        deaths: 0,
        cases_per_100k: 107.119137905178,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Landau i.d.Pfalz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.14238275810356,
        OBJECTID: 161
      }
    },
    {
      attributes: {
        EWZ: 171061,
        cases: 231,
        deaths: 1,
        cases_per_100k: 135.039547295994,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Ludwigshafen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 40.3364881533488,
        OBJECTID: 162
      }
    },
    {
      attributes: {
        EWZ: 217118,
        cases: 365,
        deaths: 6,
        cases_per_100k: 168.111349588703,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Mainz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.1866358385763,
        OBJECTID: 163
      }
    },
    {
      attributes: {
        EWZ: 53148,
        cases: 87,
        deaths: 1,
        cases_per_100k: 163.693836080379,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Neustadt a.d.Weinstraße',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.2892300745089,
        OBJECTID: 164
      }
    },
    {
      attributes: {
        EWZ: 40403,
        cases: 27,
        deaths: 0,
        cases_per_100k: 66.8267207880603,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Pirmasens',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.42519119867337,
        OBJECTID: 165
      }
    },
    {
      attributes: {
        EWZ: 50378,
        cases: 51,
        deaths: 0,
        cases_per_100k: 101.234665925602,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Speyer',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.8349279447378,
        OBJECTID: 166
      }
    },
    {
      attributes: {
        EWZ: 83330,
        cases: 145,
        deaths: 6,
        cases_per_100k: 174.006960278411,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Worms',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.6008640345614,
        OBJECTID: 167
      }
    },
    {
      attributes: {
        EWZ: 34209,
        cases: 32,
        deaths: 0,
        cases_per_100k: 93.5426349790991,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'SK Zweibrücken',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.5392440585811,
        OBJECTID: 168
      }
    },
    {
      attributes: {
        EWZ: 129244,
        cases: 147,
        deaths: 3,
        cases_per_100k: 113.738355358856,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Alzey-Worms',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.2119092569094,
        OBJECTID: 169
      }
    },
    {
      attributes: {
        EWZ: 132660,
        cases: 274,
        deaths: 5,
        cases_per_100k: 206.543042363938,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Bad Dürkheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.3680084426353,
        OBJECTID: 170
      }
    },
    {
      attributes: {
        EWZ: 75101,
        cases: 100,
        deaths: 2,
        cases_per_100k: 133.154019254071,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Donnersbergkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 30.6254244284364,
        OBJECTID: 171
      }
    },
    {
      attributes: {
        EWZ: 129075,
        cases: 118,
        deaths: 1,
        cases_per_100k: 91.4197172186713,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Germersheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.29692039511912,
        OBJECTID: 172
      }
    },
    {
      attributes: {
        EWZ: 106057,
        cases: 90,
        deaths: 0,
        cases_per_100k: 84.8600280980982,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Kaiserslautern',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.4288920108998,
        OBJECTID: 173
      }
    },
    {
      attributes: {
        EWZ: 70526,
        cases: 81,
        deaths: 0,
        cases_per_100k: 114.851260528032,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Kusel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.0150015597085,
        OBJECTID: 174
      }
    },
    {
      attributes: {
        EWZ: 110356,
        cases: 137,
        deaths: 1,
        cases_per_100k: 124.143680452354,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Südliche Weinstraße',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.7800572692015,
        OBJECTID: 175
      }
    },
    {
      attributes: {
        EWZ: 154201,
        cases: 162,
        deaths: 2,
        cases_per_100k: 105.057684450814,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Rhein-Pfalz-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.43055492506534,
        OBJECTID: 176
      }
    },
    {
      attributes: {
        EWZ: 210889,
        cases: 293,
        deaths: 8,
        cases_per_100k: 138.935648611355,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Mainz-Bingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 20.8640564467564,
        OBJECTID: 177
      }
    },
    {
      attributes: {
        EWZ: 95113,
        cases: 98,
        deaths: 2,
        cases_per_100k: 103.035336915038,
        BL: 'Rheinland-Pfalz',
        BL_ID: '7',
        county: 'LK Südwestpfalz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.8220958228633,
        OBJECTID: 178
      }
    },
    {
      attributes: {
        EWZ: 634830,
        cases: 1154,
        deaths: 26,
        cases_per_100k: 181.780949230503,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Stuttgart',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.2726084148512,
        OBJECTID: 179
      }
    },
    {
      attributes: {
        EWZ: 391640,
        cases: 1172,
        deaths: 30,
        cases_per_100k: 299.25441732203,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Böblingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 34.2150954958636,
        OBJECTID: 180
      }
    },
    {
      attributes: {
        EWZ: 533859,
        cases: 1437,
        deaths: 48,
        cases_per_100k: 269.172197153181,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Esslingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 33.7167679106281,
        OBJECTID: 181
      }
    },
    {
      attributes: {
        EWZ: 257253,
        cases: 666,
        deaths: 26,
        cases_per_100k: 258.889109164908,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Göppingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.7684536234757,
        OBJECTID: 182
      }
    },
    {
      attributes: {
        EWZ: 543984,
        cases: 1326,
        deaths: 33,
        cases_per_100k: 243.75716932851,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Ludwigsburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 22.2433012735669,
        OBJECTID: 183
      }
    },
    {
      attributes: {
        EWZ: 426158,
        cases: 974,
        deaths: 29,
        cases_per_100k: 228.553728898671,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Rems-Murr-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.6099756428367,
        OBJECTID: 184
      }
    },
    {
      attributes: {
        EWZ: 125960,
        cases: 351,
        deaths: 7,
        cases_per_100k: 278.659892029216,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Heilbronn',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 36.5195300095268,
        OBJECTID: 185
      }
    },
    {
      attributes: {
        EWZ: 343068,
        cases: 682,
        deaths: 18,
        cases_per_100k: 198.794408105682,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Heilbronn',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.0275047512447,
        OBJECTID: 186
      }
    },
    {
      attributes: {
        EWZ: 112010,
        cases: 679,
        deaths: 29,
        cases_per_100k: 606.195875368271,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Hohenlohekreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 64.279975002232,
        OBJECTID: 187
      }
    },
    {
      attributes: {
        EWZ: 195861,
        cases: 643,
        deaths: 34,
        cases_per_100k: 328.294045266796,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Schwäbisch Hall',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 26.5494406747642,
        OBJECTID: 188
      }
    },
    {
      attributes: {
        EWZ: 132321,
        cases: 296,
        deaths: 5,
        cases_per_100k: 223.698430332298,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Main-Tauber-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 27.9623037915372,
        OBJECTID: 189
      }
    },
    {
      attributes: {
        EWZ: 132472,
        cases: 336,
        deaths: 26,
        cases_per_100k: 253.638504740624,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Heidenheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 45.2925901322544,
        OBJECTID: 190
      }
    },
    {
      attributes: {
        EWZ: 314002,
        cases: 748,
        deaths: 12,
        cases_per_100k: 238.215043216285,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Ostalbkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 85.0313055330858,
        OBJECTID: 191
      }
    },
    {
      attributes: {
        EWZ: 55123,
        cases: 145,
        deaths: 8,
        cases_per_100k: 263.048092447799,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Baden-Baden',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 29.0259964080329,
        OBJECTID: 192
      }
    },
    {
      attributes: {
        EWZ: 313092,
        cases: 303,
        deaths: 3,
        cases_per_100k: 96.7766662833927,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Karlsruhe',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.8594278997866,
        OBJECTID: 193
      }
    },
    {
      attributes: {
        EWZ: 444232,
        cases: 757,
        deaths: 31,
        cases_per_100k: 170.406454285148,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Karlsruhe',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 24.7618361576834,
        OBJECTID: 194
      }
    },
    {
      attributes: {
        EWZ: 231018,
        cases: 427,
        deaths: 7,
        cases_per_100k: 184.83408219273,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Rastatt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.2545342787142,
        OBJECTID: 195
      }
    },
    {
      attributes: {
        EWZ: 160355,
        cases: 280,
        deaths: 7,
        cases_per_100k: 174.612578341804,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Heidelberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.87084905366219,
        OBJECTID: 196
      }
    },
    {
      attributes: {
        EWZ: 309370,
        cases: 390,
        deaths: 6,
        cases_per_100k: 126.062643436662,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Mannheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.8689271745806,
        OBJECTID: 197
      }
    },
    {
      attributes: {
        EWZ: 143535,
        cases: 196,
        deaths: 6,
        cases_per_100k: 136.552060473055,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Neckar-Odenwald-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 24.3842965130456,
        OBJECTID: 198
      }
    },
    {
      attributes: {
        EWZ: 547625,
        cases: 729,
        deaths: 15,
        cases_per_100k: 133.120292170737,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Rhein-Neckar-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.37388724035608,
        OBJECTID: 199
      }
    },
    {
      attributes: {
        EWZ: 125542,
        cases: 106,
        deaths: 4,
        cases_per_100k: 84.4338946328719,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Pforzheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.727469691418,
        OBJECTID: 200
      }
    },
    {
      attributes: {
        EWZ: 158397,
        cases: 530,
        deaths: 10,
        cases_per_100k: 334.602296760671,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Calw',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 46.0867314406207,
        OBJECTID: 201
      }
    },
    {
      attributes: {
        EWZ: 198905,
        cases: 331,
        deaths: 7,
        cases_per_100k: 166.411100776753,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Enzkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 43.7394736180589,
        OBJECTID: 202
      }
    },
    {
      attributes: {
        EWZ: 117935,
        cases: 435,
        deaths: 13,
        cases_per_100k: 368.847246364523,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Freudenstadt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 77.1611480900496,
        OBJECTID: 203
      }
    },
    {
      attributes: {
        EWZ: 230241,
        cases: 853,
        deaths: 44,
        cases_per_100k: 370.481365178226,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Freiburg i.Breisgau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 33.0088906841093,
        OBJECTID: 204
      }
    },
    {
      attributes: {
        EWZ: 262795,
        cases: 881,
        deaths: 26,
        cases_per_100k: 335.242299130501,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Breisgau-Hochschwarzwald',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 27.3977815407447,
        OBJECTID: 205
      }
    },
    {
      attributes: {
        EWZ: 165383,
        cases: 482,
        deaths: 31,
        cases_per_100k: 291.444707134349,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Emmendingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 26.6049110247123,
        OBJECTID: 206
      }
    },
    {
      attributes: {
        EWZ: 429479,
        cases: 834,
        deaths: 58,
        cases_per_100k: 194.188772908571,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Ortenaukreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 25.6124280814661,
        OBJECTID: 207
      }
    },
    {
      attributes: {
        EWZ: 139455,
        cases: 472,
        deaths: 8,
        cases_per_100k: 338.460435265856,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Rottweil',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 93.2200351367825,
        OBJECTID: 208
      }
    },
    {
      attributes: {
        EWZ: 212381,
        cases: 387,
        deaths: 8,
        cases_per_100k: 182.219690085271,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Schwarzwald-Baar-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.8923726698716,
        OBJECTID: 209
      }
    },
    {
      attributes: {
        EWZ: 140152,
        cases: 365,
        deaths: 9,
        cases_per_100k: 260.431531480107,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Tuttlingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 25.6863976254352,
        OBJECTID: 210
      }
    },
    {
      attributes: {
        EWZ: 285325,
        cases: 358,
        deaths: 5,
        cases_per_100k: 125.470954175064,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Konstanz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.9676684482608,
        OBJECTID: 211
      }
    },
    {
      attributes: {
        EWZ: 228639,
        cases: 451,
        deaths: 22,
        cases_per_100k: 197.254186731048,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Lörrach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 20.5564230074484,
        OBJECTID: 212
      }
    },
    {
      attributes: {
        EWZ: 170619,
        cases: 233,
        deaths: 18,
        cases_per_100k: 136.561578722182,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Waldshut',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.066428709581,
        OBJECTID: 213
      }
    },
    {
      attributes: {
        EWZ: 286748,
        cases: 1128,
        deaths: 15,
        cases_per_100k: 393.376762871929,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Reutlingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 107.411385606874,
        OBJECTID: 214
      }
    },
    {
      attributes: {
        EWZ: 227331,
        cases: 1104,
        deaths: 25,
        cases_per_100k: 485.635483062143,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Tübingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 34.3112026076514,
        OBJECTID: 215
      }
    },
    {
      attributes: {
        EWZ: 188935,
        cases: 763,
        deaths: 36,
        cases_per_100k: 403.842591367402,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Zollernalbkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 66.1603196866647,
        OBJECTID: 216
      }
    },
    {
      attributes: {
        EWZ: 126329,
        cases: 220,
        deaths: 3,
        cases_per_100k: 174.14845364089,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'SK Ulm',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.2905904424162,
        OBJECTID: 217
      }
    },
    {
      attributes: {
        EWZ: 196047,
        cases: 432,
        deaths: 7,
        cases_per_100k: 220.35532295827,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Alb-Donau-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.7722076848919,
        OBJECTID: 218
      }
    },
    {
      attributes: {
        EWZ: 199742,
        cases: 439,
        deaths: 9,
        cases_per_100k: 219.783520741757,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Biberach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.0271249912387,
        OBJECTID: 219
      }
    },
    {
      attributes: {
        EWZ: 216227,
        cases: 259,
        deaths: 6,
        cases_per_100k: 119.781525896396,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Bodenseekreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.54972320755502,
        OBJECTID: 220
      }
    },
    {
      attributes: {
        EWZ: 284285,
        cases: 464,
        deaths: 5,
        cases_per_100k: 163.216490493695,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Ravensburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.33167420018643,
        OBJECTID: 221
      }
    },
    {
      attributes: {
        EWZ: 130873,
        cases: 663,
        deaths: 27,
        cases_per_100k: 506.597999587386,
        BL: 'Baden-Württemberg',
        BL_ID: '8',
        county: 'LK Sigmaringen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 63.4202623917844,
        OBJECTID: 222
      }
    },
    {
      attributes: {
        EWZ: 136981,
        cases: 323,
        deaths: 11,
        cases_per_100k: 235.799125426154,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Ingolstadt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 44.5317233776947,
        OBJECTID: 223
      }
    },
    {
      attributes: {
        EWZ: 1471508,
        cases: 4749,
        deaths: 49,
        cases_per_100k: 322.73015165395,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK München',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 35.9495157348788,
        OBJECTID: 224
      }
    },
    {
      attributes: {
        EWZ: 63324,
        cases: 301,
        deaths: 10,
        cases_per_100k: 475.333206998926,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Rosenheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 97.9091655612406,
        OBJECTID: 225
      }
    },
    {
      attributes: {
        EWZ: 111210,
        cases: 469,
        deaths: 17,
        cases_per_100k: 421.724665048107,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Altötting',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 87.2223720888409,
        OBJECTID: 226
      }
    },
    {
      attributes: {
        EWZ: 105722,
        cases: 219,
        deaths: 6,
        cases_per_100k: 207.147046026371,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Berchtesgadener Land',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 31.2139384423299,
        OBJECTID: 227
      }
    },
    {
      attributes: {
        EWZ: 127227,
        cases: 353,
        deaths: 6,
        cases_per_100k: 277.456829132181,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Bad Tölz-Wolfratshausen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 33.7978573730419,
        OBJECTID: 228
      }
    },
    {
      attributes: {
        EWZ: 153884,
        cases: 674,
        deaths: 14,
        cases_per_100k: 437.992253905539,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Dachau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 76.6811364404357,
        OBJECTID: 229
      }
    },
    {
      attributes: {
        EWZ: 142142,
        cases: 380,
        deaths: 1,
        cases_per_100k: 267.33829550731,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Ebersberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 40.1007443260964,
        OBJECTID: 230
      }
    },
    {
      attributes: {
        EWZ: 132341,
        cases: 204,
        deaths: 8,
        cases_per_100k: 154.147240839951,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Eichstätt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 30.9805729139118,
        OBJECTID: 231
      }
    },
    {
      attributes: {
        EWZ: 137660,
        cases: 504,
        deaths: 7,
        cases_per_100k: 366.119424669476,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Erding',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 39.2270812145867,
        OBJECTID: 232
      }
    },
    {
      attributes: {
        EWZ: 179116,
        cases: 865,
        deaths: 26,
        cases_per_100k: 482.927265012618,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Freising',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 59.7378235333527,
        OBJECTID: 233
      }
    },
    {
      attributes: {
        EWZ: 219320,
        cases: 668,
        deaths: 21,
        cases_per_100k: 304.57778588364,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Fürstenfeldbruck',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 32.8287433886558,
        OBJECTID: 234
      }
    },
    {
      attributes: {
        EWZ: 88467,
        cases: 220,
        deaths: 9,
        cases_per_100k: 248.680298868505,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Garmisch-Partenkirchen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 22.6072998971368,
        OBJECTID: 235
      }
    },
    {
      attributes: {
        EWZ: 120071,
        cases: 295,
        deaths: 9,
        cases_per_100k: 245.687967952295,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Landsberg a.Lech',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.6538548025751,
        OBJECTID: 236
      }
    },
    {
      attributes: {
        EWZ: 99726,
        cases: 470,
        deaths: 7,
        cases_per_100k: 471.291338266851,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Miesbach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 35.096163487957,
        OBJECTID: 237
      }
    },
    {
      attributes: {
        EWZ: 115250,
        cases: 389,
        deaths: 13,
        cases_per_100k: 337.527114967462,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Mühldorf a.Inn',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 46.8546637744035,
        OBJECTID: 238
      }
    },
    {
      attributes: {
        EWZ: 348871,
        cases: 1073,
        deaths: 20,
        cases_per_100k: 307.56354067836,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK München',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 32.3901958030332,
        OBJECTID: 239
      }
    },
    {
      attributes: {
        EWZ: 96680,
        cases: 201,
        deaths: 8,
        cases_per_100k: 207.902358295408,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neuburg-Schrobenhausen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 42.407943731899,
        OBJECTID: 240
      }
    },
    {
      attributes: {
        EWZ: 127151,
        cases: 289,
        deaths: 13,
        cases_per_100k: 227.288814087188,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Pfaffenhofen a.d.Ilm',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 33.0315923586916,
        OBJECTID: 241
      }
    },
    {
      attributes: {
        EWZ: 260983,
        cases: 1644,
        deaths: 63,
        cases_per_100k: 629.926087139775,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Rosenheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 106.137181348977,
        OBJECTID: 242
      }
    },
    {
      attributes: {
        EWZ: 136092,
        cases: 462,
        deaths: 5,
        cases_per_100k: 339.476236663434,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Starnberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 33.0658672074773,
        OBJECTID: 243
      }
    },
    {
      attributes: {
        EWZ: 177089,
        cases: 798,
        deaths: 26,
        cases_per_100k: 450.620874249671,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Traunstein',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 105.596620908131,
        OBJECTID: 244
      }
    },
    {
      attributes: {
        EWZ: 135348,
        cases: 325,
        deaths: 1,
        cases_per_100k: 240.121760203328,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Weilheim-Schongau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.0378875195792,
        OBJECTID: 245
      }
    },
    {
      attributes: {
        EWZ: 72404,
        cases: 242,
        deaths: 5,
        cases_per_100k: 334.235677586874,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Landshut',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 53.8644273797028,
        OBJECTID: 246
      }
    },
    {
      attributes: {
        EWZ: 52469,
        cases: 113,
        deaths: 13,
        cases_per_100k: 215.365263298329,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Passau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 34.3059711448665,
        OBJECTID: 247
      }
    },
    {
      attributes: {
        EWZ: 47794,
        cases: 268,
        deaths: 14,
        cases_per_100k: 560.739841821149,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Straubing',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 140.184960455287,
        OBJECTID: 248
      }
    },
    {
      attributes: {
        EWZ: 119326,
        cases: 205,
        deaths: 6,
        cases_per_100k: 171.798266932605,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Deggendorf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 26.8172904480164,
        OBJECTID: 249
      }
    },
    {
      attributes: {
        EWZ: 78355,
        cases: 147,
        deaths: 8,
        cases_per_100k: 187.607682981303,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Freyung-Grafenau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 31.9060685342352,
        OBJECTID: 250
      }
    },
    {
      attributes: {
        EWZ: 122258,
        cases: 372,
        deaths: 24,
        cases_per_100k: 304.274566899508,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Kelheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 44.9868311276154,
        OBJECTID: 251
      }
    },
    {
      attributes: {
        EWZ: 158698,
        cases: 566,
        deaths: 22,
        cases_per_100k: 356.65225774742,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Landshut',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 54.1909790923641,
        OBJECTID: 252
      }
    },
    {
      attributes: {
        EWZ: 192043,
        cases: 363,
        deaths: 12,
        cases_per_100k: 189.020167358352,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Passau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 28.63941929672,
        OBJECTID: 253
      }
    },
    {
      attributes: {
        EWZ: 77656,
        cases: 130,
        deaths: 1,
        cases_per_100k: 167.404965488823,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Regen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 28.3300710827238,
        OBJECTID: 254
      }
    },
    {
      attributes: {
        EWZ: 120659,
        cases: 655,
        deaths: 34,
        cases_per_100k: 542.852170165508,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Rottal-Inn',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 72.9328106481904,
        OBJECTID: 255
      }
    },
    {
      attributes: {
        EWZ: 100649,
        cases: 303,
        deaths: 11,
        cases_per_100k: 301.046210096474,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Straubing-Bogen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 35.7678665461157,
        OBJECTID: 256
      }
    },
    {
      attributes: {
        EWZ: 96217,
        cases: 166,
        deaths: 2,
        cases_per_100k: 172.526684473638,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Dingolfing-Landau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.6290780215554,
        OBJECTID: 257
      }
    },
    {
      attributes: {
        EWZ: 41970,
        cases: 58,
        deaths: 2,
        cases_per_100k: 138.193948058137,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Amberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 30.9745055992375,
        OBJECTID: 258
      }
    },
    {
      attributes: {
        EWZ: 152610,
        cases: 347,
        deaths: 3,
        cases_per_100k: 227.376973985977,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Regensburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.5895419697268,
        OBJECTID: 259
      }
    },
    {
      attributes: {
        EWZ: 42520,
        cases: 225,
        deaths: 5,
        cases_per_100k: 529.162746942615,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Weiden i.d.OPf.',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 105.832549388523,
        OBJECTID: 260
      }
    },
    {
      attributes: {
        EWZ: 103109,
        cases: 341,
        deaths: 18,
        cases_per_100k: 330.717978062051,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Amberg-Sulzbach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 62.0702363518219,
        OBJECTID: 261
      }
    },
    {
      attributes: {
        EWZ: 127882,
        cases: 354,
        deaths: 13,
        cases_per_100k: 276.817691309176,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Cham',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.639417588089,
        OBJECTID: 262
      }
    },
    {
      attributes: {
        EWZ: 133561,
        cases: 240,
        deaths: 4,
        cases_per_100k: 179.693173905556,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neumarkt i.d.OPf.',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 45.6720150343289,
        OBJECTID: 263
      }
    },
    {
      attributes: {
        EWZ: 94352,
        cases: 605,
        deaths: 23,
        cases_per_100k: 641.215872477531,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neustadt a.d.Waldnaab',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 90.0881804307275,
        OBJECTID: 264
      }
    },
    {
      attributes: {
        EWZ: 193572,
        cases: 351,
        deaths: 2,
        cases_per_100k: 181.327877998884,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Regensburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 20.147541999876,
        OBJECTID: 265
      }
    },
    {
      attributes: {
        EWZ: 147189,
        cases: 364,
        deaths: 10,
        cases_per_100k: 247.30108907595,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Schwandorf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.0613564872375,
        OBJECTID: 266
      }
    },
    {
      attributes: {
        EWZ: 72504,
        cases: 1005,
        deaths: 72,
        cases_per_100k: 1386.1304203906,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Tirschenreuth',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 135.164956416198,
        OBJECTID: 267
      }
    },
    {
      attributes: {
        EWZ: 77592,
        cases: 149,
        deaths: 6,
        cases_per_100k: 192.030106196515,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Bamberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 34.7974017939994,
        OBJECTID: 268
      }
    },
    {
      attributes: {
        EWZ: 74657,
        cases: 154,
        deaths: 4,
        cases_per_100k: 206.276705466333,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Bayreuth',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 30.8075599073094,
        OBJECTID: 269
      }
    },
    {
      attributes: {
        EWZ: 41249,
        cases: 42,
        deaths: 0,
        cases_per_100k: 101.820650197581,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Coburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.9701083662634,
        OBJECTID: 270
      }
    },
    {
      attributes: {
        EWZ: 45930,
        cases: 86,
        deaths: 1,
        cases_per_100k: 187.241454387111,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Hof',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 43.5445242760723,
        OBJECTID: 271
      }
    },
    {
      attributes: {
        EWZ: 147086,
        cases: 350,
        deaths: 22,
        cases_per_100k: 237.956025726446,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Bamberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.0761051357709,
        OBJECTID: 272
      }
    },
    {
      attributes: {
        EWZ: 103656,
        cases: 311,
        deaths: 6,
        cases_per_100k: 300.030871343675,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Bayreuth',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 62.707416840318,
        OBJECTID: 273
      }
    },
    {
      attributes: {
        EWZ: 86906,
        cases: 145,
        deaths: 1,
        cases_per_100k: 166.846938071019,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Coburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 56.3827583826203,
        OBJECTID: 274
      }
    },
    {
      attributes: {
        EWZ: 116099,
        cases: 178,
        deaths: 2,
        cases_per_100k: 153.317427368022,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Forchheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.3653433707439,
        OBJECTID: 275
      }
    },
    {
      attributes: {
        EWZ: 95311,
        cases: 284,
        deaths: 15,
        cases_per_100k: 297.97190250863,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Hof',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 38.8202830733074,
        OBJECTID: 276
      }
    },
    {
      attributes: {
        EWZ: 67135,
        cases: 88,
        deaths: 1,
        cases_per_100k: 131.079168838907,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Kronach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 23.8325761525285,
        OBJECTID: 277
      }
    },
    {
      attributes: {
        EWZ: 71845,
        cases: 164,
        deaths: 6,
        cases_per_100k: 228.269190618693,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Kulmbach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 41.756559259517,
        OBJECTID: 278
      }
    },
    {
      attributes: {
        EWZ: 66838,
        cases: 162,
        deaths: 1,
        cases_per_100k: 242.377090876448,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Lichtenfels',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 29.9230976390676,
        OBJECTID: 279
      }
    },
    {
      attributes: {
        EWZ: 73178,
        cases: 531,
        deaths: 22,
        cases_per_100k: 725.627920959851,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Wunsiedel i.Fichtelgebirge',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 61.4938916067671,
        OBJECTID: 280
      }
    },
    {
      attributes: {
        EWZ: 41847,
        cases: 76,
        deaths: 3,
        cases_per_100k: 181.613974717423,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Ansbach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.5069180586422,
        OBJECTID: 281
      }
    },
    {
      attributes: {
        EWZ: 111962,
        cases: 173,
        deaths: 1,
        cases_per_100k: 154.516711026956,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Erlangen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 25.0084850217038,
        OBJECTID: 282
      }
    },
    {
      attributes: {
        EWZ: 127748,
        cases: 240,
        deaths: 18,
        cases_per_100k: 187.869868804208,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Fürth',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.5697780004384,
        OBJECTID: 283
      }
    },
    {
      attributes: {
        EWZ: 518365,
        cases: 740,
        deaths: 14,
        cases_per_100k: 142.75655185053,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Nürnberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 32.216681295998,
        OBJECTID: 284
      }
    },
    {
      attributes: {
        EWZ: 40792,
        cases: 69,
        deaths: 0,
        cases_per_100k: 169.150813885076,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Schwabach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.7087664247892,
        OBJECTID: 285
      }
    },
    {
      attributes: {
        EWZ: 183949,
        cases: 377,
        deaths: 5,
        cases_per_100k: 204.948110617617,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Ansbach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 34.2486232597079,
        OBJECTID: 286
      }
    },
    {
      attributes: {
        EWZ: 136271,
        cases: 195,
        deaths: 5,
        cases_per_100k: 143.097210705139,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Erlangen-Höchstadt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.0796280940185,
        OBJECTID: 287
      }
    },
    {
      attributes: {
        EWZ: 117387,
        cases: 377,
        deaths: 29,
        cases_per_100k: 321.159924012029,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Fürth',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 26.4083757145169,
        OBJECTID: 288
      }
    },
    {
      attributes: {
        EWZ: 170365,
        cases: 508,
        deaths: 22,
        cases_per_100k: 298.183312300062,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Nürnberger Land',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 54.0017022275702,
        OBJECTID: 289
      }
    },
    {
      attributes: {
        EWZ: 100364,
        cases: 160,
        deaths: 2,
        cases_per_100k: 159.419712247419,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neustadt a.d.Aisch-Bad Windsheim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 47.8259136742258,
        OBJECTID: 290
      }
    },
    {
      attributes: {
        EWZ: 126958,
        cases: 260,
        deaths: 6,
        cases_per_100k: 204.792135981978,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Roth',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 21.266875659667,
        OBJECTID: 291
      }
    },
    {
      attributes: {
        EWZ: 94393,
        cases: 249,
        deaths: 7,
        cases_per_100k: 263.790747195237,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Weißenburg-Gunzenhausen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 66.7422372421684,
        OBJECTID: 292
      }
    },
    {
      attributes: {
        EWZ: 70527,
        cases: 96,
        deaths: 1,
        cases_per_100k: 136.118082436514,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Aschaffenburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.7610702284232,
        OBJECTID: 293
      }
    },
    {
      attributes: {
        EWZ: 54032,
        cases: 126,
        deaths: 12,
        cases_per_100k: 233.195143618596,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Schweinfurt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 48.1196328101866,
        OBJECTID: 294
      }
    },
    {
      attributes: {
        EWZ: 127880,
        cases: 431,
        deaths: 41,
        cases_per_100k: 337.034720050047,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Würzburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 43.0090710040663,
        OBJECTID: 295
      }
    },
    {
      attributes: {
        EWZ: 174208,
        cases: 397,
        deaths: 17,
        cases_per_100k: 227.888501102131,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Aschaffenburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 51.6623806024982,
        OBJECTID: 296
      }
    },
    {
      attributes: {
        EWZ: 103218,
        cases: 194,
        deaths: 8,
        cases_per_100k: 187.95171384836,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Bad Kissingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 43.5970470266814,
        OBJECTID: 297
      }
    },
    {
      attributes: {
        EWZ: 79690,
        cases: 131,
        deaths: 2,
        cases_per_100k: 164.386999623541,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Rhön-Grabfeld',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 42.665328146568,
        OBJECTID: 298
      }
    },
    {
      attributes: {
        EWZ: 84599,
        cases: 116,
        deaths: 1,
        cases_per_100k: 137.117460017258,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Haßberge',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 20.094800174943,
        OBJECTID: 299
      }
    },
    {
      attributes: {
        EWZ: 90909,
        cases: 82,
        deaths: 0,
        cases_per_100k: 90.2000902000902,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Kitzingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.7000077000077,
        OBJECTID: 300
      }
    },
    {
      attributes: {
        EWZ: 128756,
        cases: 237,
        deaths: 3,
        cases_per_100k: 184.069091925813,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Miltenberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 28.7365248998105,
        OBJECTID: 301
      }
    },
    {
      attributes: {
        EWZ: 126365,
        cases: 137,
        deaths: 3,
        cases_per_100k: 108.416096229177,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Main-Spessart',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.618525699363,
        OBJECTID: 302
      }
    },
    {
      attributes: {
        EWZ: 115106,
        cases: 352,
        deaths: 11,
        cases_per_100k: 305.805084009522,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Schweinfurt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 62.5510399110385,
        OBJECTID: 303
      }
    },
    {
      attributes: {
        EWZ: 161834,
        cases: 367,
        deaths: 3,
        cases_per_100k: 226.775584858559,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Würzburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 31.5137733727153,
        OBJECTID: 304
      }
    },
    {
      attributes: {
        EWZ: 295135,
        cases: 302,
        deaths: 8,
        cases_per_100k: 102.326054178596,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Augsburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.14835583715927,
        OBJECTID: 305
      }
    },
    {
      attributes: {
        EWZ: 43893,
        cases: 80,
        deaths: 3,
        cases_per_100k: 182.261408425034,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Kaufbeuren',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 31.8957464743809,
        OBJECTID: 306
      }
    },
    {
      attributes: {
        EWZ: 68907,
        cases: 93,
        deaths: 5,
        cases_per_100k: 134.964517393008,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Kempten',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 40.6344783548841,
        OBJECTID: 307
      }
    },
    {
      attributes: {
        EWZ: 43837,
        cases: 45,
        deaths: 0,
        cases_per_100k: 102.653010014371,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'SK Memmingen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.4058900015968,
        OBJECTID: 308
      }
    },
    {
      attributes: {
        EWZ: 133596,
        cases: 241,
        deaths: 12,
        cases_per_100k: 180.394622593491,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Aichach-Friedberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 22.4557621485673,
        OBJECTID: 309
      }
    },
    {
      attributes: {
        EWZ: 251534,
        cases: 327,
        deaths: 4,
        cases_per_100k: 130.002305851296,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Augsburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.5292564822251,
        OBJECTID: 310
      }
    },
    {
      attributes: {
        EWZ: 96021,
        cases: 167,
        deaths: 3,
        cases_per_100k: 173.920288270274,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Dillingen a.d.Donau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 66.6520865227398,
        OBJECTID: 311
      }
    },
    {
      attributes: {
        EWZ: 125747,
        cases: 195,
        deaths: 2,
        cases_per_100k: 155.073282066371,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Günzburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 33.4003992142954,
        OBJECTID: 312
      }
    },
    {
      attributes: {
        EWZ: 174200,
        cases: 346,
        deaths: 7,
        cases_per_100k: 198.622273249139,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Neu-Ulm',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 27.5545350172216,
        OBJECTID: 313
      }
    },
    {
      attributes: {
        EWZ: 81669,
        cases: 227,
        deaths: 5,
        cases_per_100k: 277.951242209406,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Lindau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 28.1624606643892,
        OBJECTID: 314
      }
    },
    {
      attributes: {
        EWZ: 140316,
        cases: 439,
        deaths: 20,
        cases_per_100k: 312.865247013883,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Ostallgäu',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 62.0029077225691,
        OBJECTID: 315
      }
    },
    {
      attributes: {
        EWZ: 144041,
        cases: 217,
        deaths: 3,
        cases_per_100k: 150.651550600176,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Unterallgäu',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 18.0504162009428,
        OBJECTID: 316
      }
    },
    {
      attributes: {
        EWZ: 133496,
        cases: 275,
        deaths: 17,
        cases_per_100k: 205.998681608438,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Donau-Ries',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 17.2289806436148,
        OBJECTID: 317
      }
    },
    {
      attributes: {
        EWZ: 155362,
        cases: 159,
        deaths: 5,
        cases_per_100k: 102.341627939908,
        BL: 'Bayern',
        BL_ID: '9',
        county: 'LK Oberallgäu',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.72389644829495,
        OBJECTID: 318
      }
    },
    {
      attributes: {
        EWZ: 329708,
        cases: 1020,
        deaths: 50,
        cases_per_100k: 309.364649932668,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Stadtverband Saarbrücken',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 53.68386572361,
        OBJECTID: 319
      }
    },
    {
      attributes: {
        EWZ: 103366,
        cases: 170,
        deaths: 1,
        cases_per_100k: 164.464137143742,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Merzig-Wadern',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 20.3161581177563,
        OBJECTID: 320
      }
    },
    {
      attributes: {
        EWZ: 132206,
        cases: 205,
        deaths: 4,
        cases_per_100k: 155.061041102522,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Neunkirchen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 31.7686035429557,
        OBJECTID: 321
      }
    },
    {
      attributes: {
        EWZ: 195201,
        cases: 422,
        deaths: 9,
        cases_per_100k: 216.187417072658,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Saarlouis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 35.8604720262704,
        OBJECTID: 322
      }
    },
    {
      attributes: {
        EWZ: 142631,
        cases: 252,
        deaths: 4,
        cases_per_100k: 176.679683939676,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Saar-Pfalz-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 30.1477238468496,
        OBJECTID: 323
      }
    },
    {
      attributes: {
        EWZ: 87397,
        cases: 132,
        deaths: 3,
        cases_per_100k: 151.034932549172,
        BL: 'Saarland',
        BL_ID: '10',
        county: 'LK Sankt Wendel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.7304484135611,
        OBJECTID: 324
      }
    },
    {
      attributes: {
        EWZ: 72124,
        cases: 46,
        deaths: 0,
        cases_per_100k: 63.7790471964949,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'SK Brandenburg a.d.Havel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.0920082080861,
        OBJECTID: 326
      }
    },
    {
      attributes: {
        EWZ: 100219,
        cases: 39,
        deaths: 0,
        cases_per_100k: 38.9147766391602,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'SK Cottbus',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.98907392809747,
        OBJECTID: 327
      }
    },
    {
      attributes: {
        EWZ: 57873,
        cases: 22,
        deaths: 0,
        cases_per_100k: 38.0142726314516,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'SK Frankfurt (Oder)',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 328
      }
    },
    {
      attributes: {
        EWZ: 178089,
        cases: 458,
        deaths: 21,
        cases_per_100k: 257.174783394819,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'SK Potsdam',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 67.3820393174199,
        OBJECTID: 329
      }
    },
    {
      attributes: {
        EWZ: 182760,
        cases: 237,
        deaths: 7,
        cases_per_100k: 129.67826657912,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Barnim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 50.3392427226964,
        OBJECTID: 330
      }
    },
    {
      attributes: {
        EWZ: 169067,
        cases: 148,
        deaths: 4,
        cases_per_100k: 87.5392595834787,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Dahme-Spreewald',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.09777780406584,
        OBJECTID: 331
      }
    },
    {
      attributes: {
        EWZ: 102638,
        cases: 69,
        deaths: 2,
        cases_per_100k: 67.2265632611703,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Elbe-Elster',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.89719207311132,
        OBJECTID: 332
      }
    },
    {
      attributes: {
        EWZ: 161909,
        cases: 133,
        deaths: 4,
        cases_per_100k: 82.1449085597465,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Havelland',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.17630891426666,
        OBJECTID: 333
      }
    },
    {
      attributes: {
        EWZ: 194328,
        cases: 168,
        deaths: 0,
        cases_per_100k: 86.4517722613314,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Märkisch-Oderland',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.2335021201268,
        OBJECTID: 334
      }
    },
    {
      attributes: {
        EWZ: 211249,
        cases: 164,
        deaths: 2,
        cases_per_100k: 77.6335035905495,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Oberhavel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.68050026272314,
        OBJECTID: 335
      }
    },
    {
      attributes: {
        EWZ: 110476,
        cases: 37,
        deaths: 2,
        cases_per_100k: 33.4914370542018,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Oberspreewald-Lausitz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.52586987218943,
        OBJECTID: 336
      }
    },
    {
      attributes: {
        EWZ: 178658,
        cases: 98,
        deaths: 0,
        cases_per_100k: 54.8534070682533,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Oder-Spree',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.59728643553605,
        OBJECTID: 337
      }
    },
    {
      attributes: {
        EWZ: 99078,
        cases: 36,
        deaths: 0,
        cases_per_100k: 36.3350087809605,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Ostprignitz-Ruppin',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.07444639576899,
        OBJECTID: 338
      }
    },
    {
      attributes: {
        EWZ: 214664,
        cases: 209,
        deaths: 8,
        cases_per_100k: 97.3614579063094,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Potsdam-Mittelmark',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.5094845898707,
        OBJECTID: 339
      }
    },
    {
      attributes: {
        EWZ: 76508,
        cases: 22,
        deaths: 0,
        cases_per_100k: 28.755162858786,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Prignitz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.22821142887018,
        OBJECTID: 340
      }
    },
    {
      attributes: {
        EWZ: 114429,
        cases: 53,
        deaths: 0,
        cases_per_100k: 46.3169301488259,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Spree-Neiße',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 341
      }
    },
    {
      attributes: {
        EWZ: 168296,
        cases: 97,
        deaths: 3,
        cases_per_100k: 57.6365451347626,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Teltow-Fläming',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.34772068260684,
        OBJECTID: 342
      }
    },
    {
      attributes: {
        EWZ: 119552,
        cases: 22,
        deaths: 1,
        cases_per_100k: 18.402034261242,
        BL: 'Brandenburg',
        BL_ID: '12',
        county: 'LK Uckermark',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 343
      }
    },
    {
      attributes: {
        EWZ: 208886,
        cases: 74,
        deaths: 1,
        cases_per_100k: 35.4260218492383,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'SK Rostock',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.43619007496912,
        OBJECTID: 344
      }
    },
    {
      attributes: {
        EWZ: 95818,
        cases: 87,
        deaths: 0,
        cases_per_100k: 90.7971362374502,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'SK Schwerin',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.17458097643449,
        OBJECTID: 345
      }
    },
    {
      attributes: {
        EWZ: 259130,
        cases: 107,
        deaths: 3,
        cases_per_100k: 41.2920155906302,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Mecklenburgische Seenplatte',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.08725350210319,
        OBJECTID: 346
      }
    },
    {
      attributes: {
        EWZ: 215113,
        cases: 54,
        deaths: 3,
        cases_per_100k: 25.1030853551389,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Rostock',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.85948780408437,
        OBJECTID: 347
      }
    },
    {
      attributes: {
        EWZ: 224684,
        cases: 74,
        deaths: 2,
        cases_per_100k: 32.9351444695661,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Vorpommern-Rügen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.45069519859002,
        OBJECTID: 348
      }
    },
    {
      attributes: {
        EWZ: 156729,
        cases: 64,
        deaths: 1,
        cases_per_100k: 40.8348167856619,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Nordwestmecklenburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.7423961104837,
        OBJECTID: 349
      }
    },
    {
      attributes: {
        EWZ: 236697,
        cases: 113,
        deaths: 2,
        cases_per_100k: 47.7403600383613,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Vorpommern-Greifswald',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.02714018344128,
        OBJECTID: 350
      }
    },
    {
      attributes: {
        EWZ: 212618,
        cases: 61,
        deaths: 1,
        cases_per_100k: 28.6899509919198,
        BL: 'Mecklenburg-Vorpommern',
        BL_ID: '13',
        county: 'LK Ludwigslust-Parchim',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.88130826176523,
        OBJECTID: 351
      }
    },
    {
      attributes: {
        EWZ: 247237,
        cases: 181,
        deaths: 3,
        cases_per_100k: 73.2091070511291,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'SK Chemnitz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.49387429874978,
        OBJECTID: 352
      }
    },
    {
      attributes: {
        EWZ: 337696,
        cases: 433,
        deaths: 29,
        cases_per_100k: 128.221832654222,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Erzgebirgskreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 22.8015730124135,
        OBJECTID: 353
      }
    },
    {
      attributes: {
        EWZ: 306185,
        cases: 226,
        deaths: 2,
        cases_per_100k: 73.8115844995673,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Mittelsachsen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.79799794242043,
        OBJECTID: 354
      }
    },
    {
      attributes: {
        EWZ: 227796,
        cases: 268,
        deaths: 2,
        cases_per_100k: 117.649124655393,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Vogtlandkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 32.0462167904616,
        OBJECTID: 355
      }
    },
    {
      attributes: {
        EWZ: 317531,
        cases: 668,
        deaths: 21,
        cases_per_100k: 210.373160415833,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Zwickau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 29.6034088010305,
        OBJECTID: 356
      }
    },
    {
      attributes: {
        EWZ: 554649,
        cases: 447,
        deaths: 4,
        cases_per_100k: 80.591509224753,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'SK Dresden',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.60588408164443,
        OBJECTID: 357
      }
    },
    {
      attributes: {
        EWZ: 300880,
        cases: 247,
        deaths: 5,
        cases_per_100k: 82.0925285828237,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Bautzen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.2767880882744,
        OBJECTID: 358
      }
    },
    {
      attributes: {
        EWZ: 254894,
        cases: 224,
        deaths: 10,
        cases_per_100k: 87.8796676265428,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Görlitz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.88479917142028,
        OBJECTID: 359
      }
    },
    {
      attributes: {
        EWZ: 242165,
        cases: 176,
        deaths: 10,
        cases_per_100k: 72.6777197365433,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Meißen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.08471496706791,
        OBJECTID: 360
      }
    },
    {
      attributes: {
        EWZ: 245611,
        cases: 306,
        deaths: 1,
        cases_per_100k: 124.587253828208,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Sächsische Schweiz-Osterzgebirge',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.9572535432045,
        OBJECTID: 361
      }
    },
    {
      attributes: {
        EWZ: 587857,
        cases: 492,
        deaths: 3,
        cases_per_100k: 83.6938234978915,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'SK Leipzig',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.48481348355127,
        OBJECTID: 362
      }
    },
    {
      attributes: {
        EWZ: 257763,
        cases: 178,
        deaths: 4,
        cases_per_100k: 69.0556829335475,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Leipzig',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.4145047970422,
        OBJECTID: 363
      }
    },
    {
      attributes: {
        EWZ: 197673,
        cases: 109,
        deaths: 0,
        cases_per_100k: 55.1415721924593,
        BL: 'Sachsen',
        BL_ID: '14',
        county: 'LK Nordsachsen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.10594770150703,
        OBJECTID: 364
      }
    },
    {
      attributes: {
        EWZ: 81237,
        cases: 54,
        deaths: 1,
        cases_per_100k: 66.47217400938,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'SK Dessau-Roßlau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.0025604096655,
        OBJECTID: 365
      }
    },
    {
      attributes: {
        EWZ: 239257,
        cases: 264,
        deaths: 9,
        cases_per_100k: 110.341599200859,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'SK Halle',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 11.2849362819061,
        OBJECTID: 366
      }
    },
    {
      attributes: {
        EWZ: 238697,
        cases: 97,
        deaths: 1,
        cases_per_100k: 40.6372933049012,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'SK Magdeburg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.51364700855059,
        OBJECTID: 367
      }
    },
    {
      attributes: {
        EWZ: 83765,
        cases: 29,
        deaths: 0,
        cases_per_100k: 34.6206649555304,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Altmarkkreis Salzwedel',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.77526413179729,
        OBJECTID: 368
      }
    },
    {
      attributes: {
        EWZ: 159854,
        cases: 51,
        deaths: 0,
        cases_per_100k: 31.9041125026587,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Anhalt-Bitterfeld',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.25114166677093,
        OBJECTID: 369
      }
    },
    {
      attributes: {
        EWZ: 171734,
        cases: 95,
        deaths: 2,
        cases_per_100k: 55.3181082371575,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Börde',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.4813257712509,
        OBJECTID: 370
      }
    },
    {
      attributes: {
        EWZ: 180190,
        cases: 62,
        deaths: 0,
        cases_per_100k: 34.4081247572007,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Burgenlandkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.10466729563239,
        OBJECTID: 371
      }
    },
    {
      attributes: {
        EWZ: 214446,
        cases: 150,
        deaths: 1,
        cases_per_100k: 69.9476791360063,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Harz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.0569001053878,
        OBJECTID: 372
      }
    },
    {
      attributes: {
        EWZ: 89928,
        cases: 29,
        deaths: 1,
        cases_per_100k: 32.2480206387332,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Jerichower Land',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.11200071168046,
        OBJECTID: 373
      }
    },
    {
      attributes: {
        EWZ: 136249,
        cases: 34,
        deaths: 1,
        cases_per_100k: 24.9543115912777,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Mansfeld-Südharz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.2018510227598,
        OBJECTID: 374
      }
    },
    {
      attributes: {
        EWZ: 184582,
        cases: 100,
        deaths: 3,
        cases_per_100k: 54.1764635771635,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Saalekreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.41764635771635,
        OBJECTID: 375
      }
    },
    {
      attributes: {
        EWZ: 190560,
        cases: 60,
        deaths: 0,
        cases_per_100k: 31.4861460957179,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Salzlandkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0.524769101595298,
        OBJECTID: 376
      }
    },
    {
      attributes: {
        EWZ: 111982,
        cases: 77,
        deaths: 4,
        cases_per_100k: 68.7610508831777,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Stendal',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 8.93000660820489,
        OBJECTID: 377
      }
    },
    {
      attributes: {
        EWZ: 125840,
        cases: 146,
        deaths: 3,
        cases_per_100k: 116.020343293071,
        BL: 'Sachsen-Anhalt',
        BL_ID: '15',
        county: 'LK Wittenberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.8931977113795,
        OBJECTID: 378
      }
    },
    {
      attributes: {
        EWZ: 213699,
        cases: 117,
        deaths: 2,
        cases_per_100k: 54.7499052405486,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Erfurt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 4.67947908038877,
        OBJECTID: 379
      }
    },
    {
      attributes: {
        EWZ: 94152,
        cases: 71,
        deaths: 1,
        cases_per_100k: 75.409975358994,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Gera',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 33.9875945279973,
        OBJECTID: 380
      }
    },
    {
      attributes: {
        EWZ: 111407,
        cases: 155,
        deaths: 3,
        cases_per_100k: 139.129498146436,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Jena',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.59043866184351,
        OBJECTID: 381
      }
    },
    {
      attributes: {
        EWZ: 34835,
        cases: 11,
        deaths: 2,
        cases_per_100k: 31.5774364862925,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Suhl',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 382
      }
    },
    {
      attributes: {
        EWZ: 65090,
        cases: 58,
        deaths: 0,
        cases_per_100k: 89.1073897680135,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Weimar',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 9.21800583807036,
        OBJECTID: 383
      }
    },
    {
      attributes: {
        EWZ: 42370,
        cases: 13,
        deaths: 1,
        cases_per_100k: 30.682086381874,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'SK Eisenach',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 7.08048147274015,
        OBJECTID: 384
      }
    },
    {
      attributes: {
        EWZ: 100380,
        cases: 99,
        deaths: 3,
        cases_per_100k: 98.6252241482367,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Eichsfeld',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.9242877067145,
        OBJECTID: 385
      }
    },
    {
      attributes: {
        EWZ: 83822,
        cases: 43,
        deaths: 0,
        cases_per_100k: 51.2991815991029,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Nordhausen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.0880675717592,
        OBJECTID: 386
      }
    },
    {
      attributes: {
        EWZ: 123025,
        cases: 33,
        deaths: 0,
        cases_per_100k: 26.8238162975005,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Wartburgkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.62568583621215,
        OBJECTID: 387
      }
    },
    {
      attributes: {
        EWZ: 102912,
        cases: 56,
        deaths: 1,
        cases_per_100k: 54.4154228855721,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Unstrut-Hainich-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 12.6321517412935,
        OBJECTID: 388
      }
    },
    {
      attributes: {
        EWZ: 75009,
        cases: 35,
        deaths: 0,
        cases_per_100k: 46.661067338586,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Kyffhäuserkreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.33317335253103,
        OBJECTID: 389
      }
    },
    {
      attributes: {
        EWZ: 122347,
        cases: 65,
        deaths: 1,
        cases_per_100k: 53.1275797526707,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Schmalkalden-Meiningen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.0775580929651,
        OBJECTID: 390
      }
    },
    {
      attributes: {
        EWZ: 135452,
        cases: 91,
        deaths: 3,
        cases_per_100k: 67.1824705430706,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Gotha',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 26.5776806544016,
        OBJECTID: 391
      }
    },
    {
      attributes: {
        EWZ: 69655,
        cases: 33,
        deaths: 0,
        cases_per_100k: 47.3763548919676,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Sömmerda',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 1.43564711793841,
        OBJECTID: 392
      }
    },
    {
      attributes: {
        EWZ: 63553,
        cases: 13,
        deaths: 1,
        cases_per_100k: 20.4553679605998,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Hildburghausen',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 393
      }
    },
    {
      attributes: {
        EWZ: 108742,
        cases: 104,
        deaths: 2,
        cases_per_100k: 95.6392194368321,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Ilm-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 3.67843151680124,
        OBJECTID: 394
      }
    },
    {
      attributes: {
        EWZ: 81947,
        cases: 59,
        deaths: 2,
        cases_per_100k: 71.9977546462958,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Weimarer Land',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.10150463104202,
        OBJECTID: 395
      }
    },
    {
      attributes: {
        EWZ: 56196,
        cases: 52,
        deaths: 1,
        cases_per_100k: 92.5332763897786,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Sonneberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.2358886753506,
        OBJECTID: 396
      }
    },
    {
      attributes: {
        EWZ: 106356,
        cases: 54,
        deaths: 0,
        cases_per_100k: 50.7728760013539,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Saalfeld-Rudolstadt',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 0,
        OBJECTID: 397
      }
    },
    {
      attributes: {
        EWZ: 83051,
        cases: 50,
        deaths: 1,
        cases_per_100k: 60.2039710539307,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Saale-Holzland-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 2.40815884215723,
        OBJECTID: 398
      }
    },
    {
      attributes: {
        EWZ: 80868,
        cases: 99,
        deaths: 7,
        cases_per_100k: 122.421724291438,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Saale-Orla-Kreis',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 24.7316614730178,
        OBJECTID: 399
      }
    },
    {
      attributes: {
        EWZ: 98159,
        cases: 253,
        deaths: 14,
        cases_per_100k: 257.745087052639,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Greiz',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 41.7689666765146,
        OBJECTID: 400
      }
    },
    {
      attributes: {
        EWZ: 90118,
        cases: 37,
        deaths: 0,
        cases_per_100k: 41.0572804545152,
        BL: 'Thüringen',
        BL_ID: '16',
        county: 'LK Altenburger Land',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 5.54828114250205,
        OBJECTID: 401
      }
    },
    {
      attributes: {
        EWZ: 265225,
        cases: 396,
        deaths: 16,
        cases_per_100k: 149.307192006787,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Reinickendorf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 26.7697238193986,
        OBJECTID: 404
      }
    },
    {
      attributes: {
        EWZ: 342332,
        cases: 587,
        deaths: 9,
        cases_per_100k: 171.470969701927,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Charlottenburg-Wilmersdorf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.8978184919902,
        OBJECTID: 405
      }
    },
    {
      attributes: {
        EWZ: 271153,
        cases: 251,
        deaths: 1,
        cases_per_100k: 92.5676647501595,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Treptow-Köpenick',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 10.6950688356758,
        OBJECTID: 406
      }
    },
    {
      attributes: {
        EWZ: 407765,
        cases: 480,
        deaths: 5,
        cases_per_100k: 117.714860274913,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Pankow',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 15.6953147033218,
        OBJECTID: 407
      }
    },
    {
      attributes: {
        EWZ: 329691,
        cases: 499,
        deaths: 13,
        cases_per_100k: 151.353843447349,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Neukölln',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.8624014607617,
        OBJECTID: 408
      }
    },
    {
      attributes: {
        EWZ: 291452,
        cases: 182,
        deaths: 3,
        cases_per_100k: 62.4459602267269,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Lichtenberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.51908375993303,
        OBJECTID: 409
      }
    },
    {
      attributes: {
        EWZ: 268548,
        cases: 190,
        deaths: 0,
        cases_per_100k: 70.7508527339619,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Marzahn-Hellersdorf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 14.1501705467924,
        OBJECTID: 410
      }
    },
    {
      attributes: {
        EWZ: 243977,
        cases: 192,
        deaths: 4,
        cases_per_100k: 78.6959426503318,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Spandau',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 6.96786992216479,
        OBJECTID: 411
      }
    },
    {
      attributes: {
        EWZ: 308697,
        cases: 418,
        deaths: 3,
        cases_per_100k: 135.407859486811,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Steglitz-Zehlendorf',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 19.7604771021422,
        OBJECTID: 412
      }
    },
    {
      attributes: {
        EWZ: 384172,
        cases: 748,
        deaths: 4,
        cases_per_100k: 194.704455296065,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Mitte',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 31.4963089449517,
        OBJECTID: 413
      }
    },
    {
      attributes: {
        EWZ: 289762,
        cases: 403,
        deaths: 4,
        cases_per_100k: 139.079658478337,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Friedrichshain-Kreuzberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 13.1142109731435,
        OBJECTID: 414
      }
    },
    {
      attributes: {
        EWZ: 351644,
        cases: 502,
        deaths: 12,
        cases_per_100k: 142.758016630456,
        BL: 'Berlin',
        BL_ID: '11',
        county: 'SK Berlin Tempelhof-Schöneberg',
        last_update: '16.04.2020, 00:00 Uhr',
        cases7_per_100k: 16.209575593498,
        OBJECTID: 415
      }
    }
  ]
}
