import * as colors from "@webgeoda/utils/colors";

const data = [
  {
    name: 'US States', // Plain english name for dataset
    geodata: 'states.geojson', // geospatial data to join to
    id: 'GEOID', // fid / geoid join column
    bounds: [-125.109215,-66.925621,25.043926,49.295128],
    tables: {
      PS09_data: {
        file: 'PS09_2017_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },
      PS11_data: {
        file: 'PS11_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },
      PS08_data: {
        file: 'PS08_2019_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },   
      PS03_data: {
        file: 'PS03_2017_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },  
      PS04_data: {
        file: 'PS04_2018_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },  
      PS05_data: {
        file: 'PS05_2017_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },  
      PS06_data: {
        file: 'PS06_2019_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },  
      PS07_data: {
        file: 'PS07_2018_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },  
      Health01_data: {
        file: 'Health01_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },  
      Health02_1_data: {
        file: 'Health02_S_Prevalence.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },  
     Health02_2_data: {
        file: 'Health02_S_Mortality.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },  
      Health03_data: {
        file: 'Health03_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },
      DS01_data: {
        file: 'DS01_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },
      DS04_data: {
        file: 'DS04_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },
      DS05_data: {
        file: 'DS05_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },
      DS06_data: {
        file: 'DS06_S.csv',
        type: 'characteristic',
        join: 'STATEFP',
      },
      EC01: {
        file: 'EC01_2018_S.csv',
        type:'characteristics',
        join:'STATEFP'
      },
      EC02: {
        file: 'EC02_S.csv',
        type:'characteristics',
        join:'STATEFP'
      },
      EC03: {
        file: 'EC03_2018_S.csv',
        type:'characteristics',
        join:'STATEFP'
      },
      EC04: {
        file: 'EC04_S.csv',
        type:'characteristics',
        join:'STATEFP'
      },
      BE01: {
        file: 'BE01_S.csv',
        type:'characteristics',
        join:'STATEFP'
      },
      BE03: {
        file: 'BE03_S.csv',
        type:'characteristics',
        join:'STATEFP'
      },
    },
  },
  {
    name: 'US Counties', // Plain english name for dataset
    geodata: 'county.geojson', // geospatial data to join to
    id: 'GEOID', // fid / geoid join column
    bounds: [-125.109215,-66.925621,25.043926,49.295128],
    tables: {
      Access01_data: {
        file: 'Access01_C.csv',
        type: 'characteristic',
        join: 'COUNTYFP',
      },
      Health03_data: {
        file: 'Health03_C.csv',
        type:'characteristic',
        join: 'COUNTYFP',
      },
      DS01_data: {
        file: 'DS01_C.csv',
        type: 'characteristic',
        join: 'COUNTYFP',
      },
      DS03_data: {
        file: 'DS03_C.csv',
        type: 'characteristic',
        join: 'COUNTYFP',
      },
      DS04_data: {
        file: 'DS04_C.csv',
        type: 'characteristic',
        join: 'COUNTYFP',
      },
      DS05_data: {
        file: 'DS05_C.csv',
        type: 'characteristic',
        join: 'COUNTYFP',
      },
      DS06_data: {
        file: 'DS06_C.csv',
        type: 'characteristic',
        join: 'COUNTYFP',
      },
      PS01_data: {
        file: 'PS01_2016_C.csv',
        type:'characteristic',
        join: 'COUNTYFP',
      },
      PS02_data: {
        file: 'PS02_2017_C.csv',
        type:'characteristic',
        join: 'COUNTYFP',
      },
      EC01: {
        file: 'EC01_2018_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
      EC02: {
        file: 'EC02_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
      EC03: {
        file: 'EC03_2018_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
      EC04: {
        file: 'EC04_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
      BE01: {
        file: 'BE01_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
      BE02_C: {
        file: 'BE02_RUCA_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
      BE03: {
        file: 'BE03_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
      BE04: {
        file: 'BE04_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
      BE05: {
        file: 'BE05_C.csv',
        type:'characteristics',
        join:'COUNTYFP'
      },
    },
  },
  {
    name: 'US Zip Codes',
    geodata: 'US Zip Codes [tiles]',
    tiles: `csds-hiplab.7quz45z3`,
    id: 'ZCTA',
    bounds: [-125.109215,-66.925621,25.043926,49.295128],
    tables: {
      // Access01_data: {
      //   file: 'Access01_Z.csv',
      //   type: 'characteristic',
      //   join: 'ZCTA',
      // },
      Access01_subvar_data: {
        file: 'Access01_sub_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      Access02_data: {
        file: 'Access02_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      Access03_data: {
        file: 'Access03_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      Access04_data: {
      file: 'Access04_Z.csv',
      type: 'characteristic',
      join: 'ZCTA',
      },
      Access05_data: {
      file: 'Access05_Z.csv',
      type: 'characteristic',
      join: 'ZCTA',
      },
      Access06_data: {
        file: 'Access06_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      Access07_data: {
        file: 'Access07_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      DS01_data: {
        file: 'DS01_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      DS04_data: {
        file: 'DS04_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      DS05_data: {
        file: 'DS05_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      DS06_data: {
        file: 'DS06_Z.csv',
        type: 'characteristic',
        join: 'ZCTA',
      },
      EC01: {
        file: 'EC01_2018_Z.csv',
        type:'characteristics',
        join:'ZCTA'
      },
      EC02: {
        file: 'EC02_Z.csv',
        type:'characteristics',
        join:'ZCTA'
      },
      EC03: {
        file: 'EC03_2018_Z.csv',
        type:'characteristics',
        join:'ZCTA'
      },
      BE01: {
        file: 'BE01_Z.csv',
        type:'characteristics',
        join:'ZCTA'
      },
      BE02: {
        file: 'BE02_RUCA_Z.csv',
        type:'characteristics',
        join:'ZCTA'
      },
      BE03: {
        file: 'BE03_Z.csv',
        type:'characteristics',
        join:'ZCTA'
      },
    }
  },  
  {
    name: 'US Tracts',
    geodata: 'US Tracts [tiles]',
    tiles: `csds-hiplab.3ezoql1c`,
    id: 'GEOID',
    bounds: [-125.109215,-66.925621,25.043926,49.295128],
    tables: {
      Access01_data: {
        file: 'Access01_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      Access02_data: {
        file: 'Access02_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      DS01_data: {
        file: 'DS01_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      DS03_data: {
        file: 'DS03_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      DS04_data: {
        file: 'DS04_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      DS05_subdata: {
        file: 'DS05_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      Access03_data: {
        file: 'Access03_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      Access04_data: {
        file: 'Access04_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      Access05_data: {
        file: 'Access05_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      Access06_data: {
        file: 'Access06_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      Access07_data: {
        file: 'Access07_T.csv',
        type: 'characteristic',
        join: 'GEOID',
      },
      EC01: {
        file: 'EC01_2018_T.csv',
        type:'characteristics',
        join:'GEOID'
      },
      EC02: {
        file: 'EC02_T.csv',
        type:'characteristics',
        join:'GEOID'
      },
      EC03: {
        file: 'EC03_2018_T.csv',
        type:'characteristics',
        join:'GEOID'
      },
      EC04: {
        file: 'EC04_T.csv',
        type:'characteristics',
        join:'GEOID'
      },
      BE01: {
        file: 'BE01_T.csv',
        type:'characteristics',
        join:'GEOID'
      },
      BE02: {
        file: 'BE02_RUCA_T.csv',
        type:'characteristics',
        join:'GEOID'
      },
      BE03: {
        file: 'BE03_T.csv',
        type:'characteristics',
        join:'GEOID'
      },
    }
  }
];

const categoricalPreset = {
  categorical: true,
  colorScale: colors.colorbrewer.Dark2,
};

const variables = [
  // Policy Variables
  {
    variable: "Medical marijuana laws",
    numerator: "PS09_data",
    nProperty: "MedMarijLaw",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['No laws authorizing adults to use medical marijuana', 
    'Has laws authorizing adults to use medical marijuana'],
    colorScale: [[252,141,98], [102,194,165]],
   // ...categoricalPreset
  },
  {
    variable: "Public health expenditures",
    numerator: "PS11_data",
    nProperty: "healthExp_S",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Public welfare expenditures",
    numerator: "PS11_data",
    nProperty: "wlfrExp_S",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Greens,
  },
  {
    variable: "Corrections expenditures",
    numerator: "PS11_data",
    nProperty: "crrctExp_S",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Greens,
  },
  {
    variable: "Police & fire expenditures",
    numerator: "PS11_data",
    nProperty: "plcFireExp_S",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Greens,
  },
  {
    variable: "Syringe Service Program (SSP) Authorization Laws",
    numerator: "PS08_data",
    nProperty: "expSSP",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['No laws authorizing Syringe Service Programs', 
    'Has laws authorizing Syringe Service Programs'],
    colorScale: [[252,141,98], [102,194,165]],
    // colorScale: colors.colorbrewer.Dark2
  },
  {
    variable: "Drug paraphernalia laws",
    numerator: "PS08_data",
    nProperty: "noPrphLw",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['Has drug paraphernalia laws',
      'No drug paraphernalia laws'],
    colorScale: [[102,194,165], [252,141,98]],
    //colorScale: colors.colorbrewer.Dark2
  },
  {
    variable: "Distribution of syringes laws",
    numerator: "PS08_data",
    nProperty: "ntPrFrDsSy",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['Laws Prohibit Free Distribution of Syringes', 
    'Law Does Not Prohibit Free Distribution of Syringes'],
    colorScale: [[252,141,98], [102,194,165]],
    //colorScale: colors.colorbrewer.Dark2
  },
  {
    variable: "Paraphernalia exludes objects used for injecting drugs",
    numerator: "PS08_data",
    nProperty: "PrExcInj",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['Does NOT Explicitly Exlude Objects Used for Injecting Drugs', 
    'Explicitly Exludes Objects Used for Injecting Drugs'],
    colorScale: [[252,141,98], [102,194,165]],
    //colorScale: colors.colorbrewer.Dark2
  },
  {
    variable: "Paraphernalia does not refer to objects used for injecting drugs",
    numerator: "PS08_data",
    nProperty: "PrNtRefInj",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['Paraphernalia Definition Refers to Objects Used For Injecting Drugs', 
    'Paraphernalia Definition Does NOT Refer to Objects Used For Injecting Drugs'],
    colorScale: [[102,194,165], [252,141,98]],
    //colorScale: colors.colorbrewer.Dark2
  },
  {
    variable: "Laws removing barriers to SSPs",
    numerator: "PS08_data",
    nProperty: "noLwRmUnc",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['No Law Removing Barriers or Uncertainty as to SSP Legality',
    'Has Law Removing Barriers or Uncertainty as to SSP Legality'],
    colorScale: [[102,194,165], [252,141,98]],
    //colorScale: colors.colorbrewer.Dark2
  },
  {
    variable: "Any PDMP (fraction of year in 2017)",
    numerator: "PS03_data",
    nProperty: "AnyPDMPfr",
    categorical: true,
    fixedScale: [0.5,1],
    fixedLabels: ['Six months', 'Entire year'],
    colorScale: [[252,141,98], [102,194,165]],
  },
  {
    variable: "Any Horowitz PDMP (fraction of year in 2017)",
    numerator: "PS03_data",
    nProperty: "AnyPDMPHfr",
    categorical: true,
    fixedScale: [0.5,1],
    fixedLabels: ['Six months', 'Entire year'],
    colorScale: [[252,141,98], [102,194,165]],
  },
  {
    variable: "Must-access PDMP (fraction of year in 2017)",
    numerator: "PS03_data",
    nProperty: "MsAcPDMPfr",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['None',
    'Entire year'],
    colorScale: [[252,141,98], [102,194,165]],
  },
  {
    variable: "Operational PDMP (fraction of year in 2017)",
    numerator: "PS03_data",
    nProperty: "OpPDMPfr",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['None',
    'Entire year'],
    colorScale: [[252,141,98], [102,194,165]],
  },
  {
    variable: "Electronic PDMP (fraction of year in 2017)",
    numerator: "PS03_data",
    nProperty: "ElcPDMPfr",
    categorical: true,
    fixedScale: [0.5,1],
    fixedLabels: ['Six months',
    'Entire year'],
    colorScale: [[252,141,98], [102,194,165]],
  },
  {
    variable: "Total jail population rate",
    numerator: "PS02_data",
    nProperty: "TtlJlPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr,
  },
  {
    variable: "Female jail population rate",
    numerator: "PS02_data",
    nProperty: "FmlJlPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Reds
  },
  {
    variable: "Male jail population rate",
    numerator: "PS02_data",
    nProperty: "MlJlPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr,
  },
  {
    variable: "AAPI jail population rate",
    numerator: "PS02_data",
    nProperty: "AapiJlPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Black jail population rate",
    numerator: "PS02_data",
    nProperty: "BlckJlPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Latinx jail population rate",
    numerator: "PS02_data",
    nProperty: "LtnxJlPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Native American jail population rate",
    numerator: "PS02_data",
    nProperty: "NtvJlPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "White (non-Hispanic) jail population rate",
    numerator: "PS02_data",
    nProperty: "WhtJlPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Total jail admission rate",
    numerator: "PS02_data",
    nProperty: "TtlJlAdmr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Pretrial jail population rate",
    numerator: "PS02_data",
    nProperty: "TtlJlPrtr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Total prison population rate",
    numerator: "PS01_data",
    nProperty: "TtlPrPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Female prison population rate",
    numerator: "PS01_data",
    nProperty: "FmlPrPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Male prison population rate",
    numerator: "PS01_data",
    nProperty: "MlPrPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "AAPI prison population rate",
    numerator: "PS01_data",
    nProperty: "AapiPrPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Black prison population rate",
    numerator: "PS01_data",
    nProperty: "BlckPrPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Latinx prison population rate",
    numerator: "PS01_data",
    nProperty: "LtnxPrPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Native American prison population rate",
    numerator: "PS01_data",
    nProperty: "NtvPrPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "White (non-Hispanic) prison population rate",
    numerator: "PS01_data",
    nProperty: "WhtPrPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Total prison admission rate",
    numerator: "PS01_data",
    nProperty: "TtlPrAPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Female prison admission rate",
    numerator: "PS01_data",
    nProperty: "FmlPrAPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Male prison admission rate",
    numerator: "PS01_data",
    nProperty: "MlPrAPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "AAPI prison admission rate",
    numerator: "PS01_data",
    nProperty: "AapiPrAPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Black prison admission rate",
    numerator: "PS01_data",
    nProperty: "BlckPrAPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Latinx prison admission rate",
    numerator: "PS01_data",
    nProperty: "LtnxPrAPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Native American prison admission rate",
    numerator: "PS01_data",
    nProperty: "NtvPrAPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "White (Non-Hispanic) prison admission rate",
    numerator: "PS01_data",
    nProperty: "WhtPrAPpr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Any Good Samaritan Law (fraction of year in 2018)",
    numerator: "PS04_data",
    nProperty: "AnyGSLfr",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Good Samaritan Law Protecting Arrest (fraction of year in 2018)",
    numerator: "PS04_data",
    nProperty: "GSLArrfr",
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['1: Has Good Samaritan Law Protecting Arrest for entire year', 
    '0: No Good Samaritan Law Protecting Arrest'],
    colorScale: [[102,194,165], [252,141,98]],
    //colorScale: colors.colorbrewer.Dark2,
    reverse: true
  },
  {
    variable: "Naloxone law in effect (fraction of year in 2017)",
    numerator: "PS05_data",
    nProperty: "NalPrStfr",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Naloxone law allowing distribution through a standing or order (fraction of year in 2017)",
    numerator: "PS05_data",
    nProperty: "AnyNalfr",
    binning: "naturalBreaks",
    numberOfBins: 4,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Naloxone law allowing pharmacists prescriptive authority (fraction of year in 2017)",
    numerator: "PS05_data",
    nProperty: "NalPresfr",
    binning: "naturalBreaks",
    numberOfBins: 4,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Total Medicaid spending",
    numerator: "PS06_data",
    nProperty: "TtlMedExpN",
    binning: "quantileBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Traditional Medicaid federal spending",
    numerator: "PS07_data",
    nProperty: "TradFedExp",
    binning: "quantileBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Traditional Medicaid state spending",
    numerator: "PS07_data",
    nProperty: "TradSttExp",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Expansion Medicaid federal spending",
    numerator: "PS07_data",
    nProperty: "ExpnFedExp",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Blues
  },
  {
    variable: "Expansion Medicaid state spending",
    numerator: "PS07_data",
    nProperty: "ExpnSttExp",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Blues
  },
  // Health Variables
  {
    variable: "Drug-related death rate",
    numerator: "Health01_data",
    nProperty: "rawDeathRt",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.Reds,
  },
  {
    variable: "HCV infection rate",
    numerator: "Health02_1_data",
    nProperty: "State Rate",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Reds,
  },
  {
    variable: "HCV mortality rate",
    numerator: "Health02_2_data",
    nProperty: "State Death Rate_2017",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Reds,
  },
  {
    variable: "Count of Primary Care Physicians (PCPs)",
    numerator: "Health03_data",
    nProperty: "pcp_total",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.Blues,
  },
  {
    variable: "Count of Specialty Physicians",
    numerator: "Health03_data",
    nProperty: "sp_total",
    binning: "naturalBreaks",
    numberOfBins: 8,
    colorScale: colors.colorbrewer.YlGnBu,
  },
  {
    variable: "Distance (mi) to nearest MOUD (all)",
    numerator: "Access01_data",
    nProperty: "minDisMOUD",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Distance (mi) to nearest methadone provider",
    numerator: "Access01_data",
    nProperty: "minDisMeth",
    binning: "naturalBreaks",
    numberOfBins: 7,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Driving time (min) to nearest methadone provider",
    numerator: "Access01_subvar_data",
    nProperty: "time_to_nearest_methadone",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Count of methadone providers in 30 minutes",
    numerator: "Access01_subvar_data",
    nProperty: "count_in_range_methadone",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Distance (mi) to nearest buprenorphine provider",
    numerator: "Access01_data",
    nProperty: "minDisBup",
    binning: "naturalBreaks",
    numberOfBins: 7,
    colorScale: colors.colorbrewer.RdBu,
    reverse: true
  },
  {
    variable: "Driving time (min) to nearest buprenorphine provider",
    numerator: "Access01_subvar_data",
    nProperty: "time_to_nearest_buprenorphine",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Count of buprenorphine providers in 30 minutes",
    numerator: "Access01_subvar_data",
    nProperty: "count_in_range_buprenorphine",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.RdBu, 
    reverse:true
  },
  {
    variable: "Distance (mi) to nearest naltrexone provider",
    numerator: "Access01_data",
    nProperty: "minDisNalV",
    binning: "naturalBreaks",
    numberOfBins: 7,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Driving time (min) to nearest naltrexone provider",
    numerator: "Access01_subvar_data",
    nProperty: "time_to_nearest_naltrexone",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Count of naltrexone providers in 30 minutes",
    numerator: "Access01_subvar_data",
    nProperty: "count_in_range_naltrexone",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Distance (mi) to nearest FQHC",
    numerator: "Access02_data",
    nProperty: "minDisFQHC",
    binning: "quantileBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Distance (mi) to nearest hospital",
    numerator: "Access03_data",
    nProperty: "minDisHosp",
    binning: "naturalBreaks",
    numberOfBins: 7,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Distance (mi) to nearest pharmacy",
    numerator: "Access04_data",
    nProperty: "minDisRx",
    binning: "naturalBreaks",
    numberOfBins: 7,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Distance (mi) to nearest mental health provider",
    numerator: "Access05_data",
    nProperty: "minDisMH",
    binning: "naturalBreaks",
    numberOfBins: 7,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Distance (mi) to substance use treatment (SUT) facility",
    numerator: "Access06_data",
    nProperty: "minDist_SUT",
    binning: "naturalBreaks",
    numberOfBins: 7,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  {
    variable: "Distance (mi) to opioid use treatment facility",
    numerator: "Access07_data",
    nProperty: "minDist_OTP",
    binning: "naturalBreaks",
    numberOfBins: 7,
    colorScale: colors.colorbrewer.RdBu,
    reverse:true
  },
  // Demographic Variables
  {
    variable: "% White Population",
    numerator: "DS01_data",
    nProperty: "whiteP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Black/African American Population",
    numerator: "DS01_data",
    nProperty: "blackP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Hispanic/Latinx Population",
    numerator: "DS01_data",
    nProperty: "hispP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Native American/Alaska Native Population",
    numerator: "DS01_data",
    nProperty: "amIndP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Asian Population",
    numerator: "DS01_data",
    nProperty: "asianP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Native Hawaiian & Other PI Population",
    numerator: "DS01_data",
    nProperty: "pacIsP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Other (race) Population",
    numerator: "DS01_data",
    nProperty: "otherP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 18-65",
    numerator: "DS01_data",
    nProperty: "age18_64",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 0-4",
    numerator: "DS01_data",
    nProperty: "age0_4",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 5-14",
    numerator: "DS01_data",
    nProperty: "age5_14",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 15-19",
    numerator: "DS01_data",
    nProperty: "age15_19",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 20-24",
    numerator: "DS01_data",
    nProperty: "age20_24",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 15-44",
    numerator: "DS01_data",
    nProperty: "age15_44",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 45-49",
    numerator: "DS01_data",
    nProperty: "age45_49",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 50-54",
    numerator: "DS01_data",
    nProperty: "age50_54",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 55-59",
    numerator: "DS01_data",
    nProperty: "age55_59",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 60-64",
    numerator: "DS01_data",
    nProperty: "age60_64",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Population, Age 65+",
    numerator: "DS01_data",
    nProperty: "ageOv65",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Population, Age 15-24",
    numerator: "DS01_data",
    nProperty: "a15_24P",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Population, Age under 45",
    numerator: "DS01_data",
    nProperty: "und45P",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Population, Age 65+",
    numerator: "DS01_data",
    nProperty: "ovr65P",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Population with Disability",
    numerator: "DS01_data",
    nProperty: "disbP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Population without High School Degree",
    numerator: "DS01_data",
    nProperty: "noHSP",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Social Vulnerability Index (SVI)",
    numerator: "DS03_data",
    nProperty: "SVIS",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.YlOrBr
  },
  {
    variable: "Total Veteran Population",
    numerator: "DS04_data",
    nProperty: "TotalVetPop",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "% Veteran Population",
    numerator: "DS04_data",
    nProperty: "VetPercent",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Total Male Veteran Population",
    numerator: "DS04_data",
    nProperty: "MaleVetPop",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Male Veteran Population, Age 18-34",
    numerator: "DS04_data",
    nProperty: "MaleVet18To34",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Male Veteran Population, Age 35-54",
    numerator: "DS04_data",
    nProperty: "MaleVet35To54",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Male Veteran Population, Age 55-64",
    numerator: "DS04_data",
    nProperty: "MaleVet55To64",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Male Veteran Population, Age 65-74",
    numerator: "DS04_data",
    nProperty: "MaleVet65To74",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Male Veteran Population, Age 75+",
    numerator: "DS04_data",
    nProperty: "MaleVet75Plus",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Female Veteran Population, Age 18-34",
    numerator: "DS04_data",
    nProperty: "FemaleVet18To34",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Female Veteran Population, Age 35-54",
    numerator: "DS04_data",
    nProperty: "FemaleVet35To54",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Female Veteran Population, Age 55-64",
    numerator: "DS04_data",
    nProperty: "FemaleVet55To64",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Female Veteran Population, Age 65-74",
    numerator: "DS04_data",
    nProperty: "FemaleVet65To74",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  {
    variable: "Female Veteran Population, Age 75+",
    numerator: "DS04_data",
    nProperty: "FemaleVet75Plus",
    binning: "naturalBreaks",
    numberOfBins: 6,
    colorScale: colors.colorbrewer.GnBu
  },
  //{
  //  variable: "Number of non-related group dwellings",
  //  numerator: "DS05_subdata",
  //  nProperty: "NonrelatedGroupDwelling",
  //  binning: "naturalBreaks",
  //  numberOfBins: 7,
  //  colorScale: colors.colorbrewer.YlOrBr
  //},
  //{
  //  variable: "Number of People under one roof",
  //  numerator: "DS05_subdata",
  //  nProperty: "GroupQuarters",
  //  binning: "naturalBreaks",
  //  numberOfBins: 7,
  //  colorScale: colors.colorbrewer.YlOrBr
  //},
  // No data has this column
  // {
  //   variable: "% Homeless Population",
  //   numerator: "DS05_subdata",
  //   nProperty: "HomelessPercent",
  //   binning: "quantileBreaks",
  //   numberOfBins: 7,
  //   colorScale: colors.colorbrewer.YlOrBr
  // },
  //{
  //  variable: "Number of beds available to Homeless Population (during census time)",
  //  numerator: "DS06_data",
  //  nProperty: "BED_COUNT",
  //  binning: "quantileBreaks",
  //  numberOfBins: 7,
  //  colorScale: colors.colorbrewer.YlOrBr, 
  //  reverse:true
  //},
  //{
  //  variable: "Number of beds available to Homeless Population (year-round)",
  //  numerator: "DS06_data",
  //  nProperty: "YEARLY_BED_COUNT",
  //  binning: "quantileBreaks",
  //  numberOfBins: 7,
  //  colorScale: colors.colorbrewer.YlOrBr
  //},
  //{
  //  variable: "Number of housing-insecure individuals at a shelter",
  //  numerator: "DS06_data",
  //  nProperty: "POINT_IN_TIME",
  //  binning: "quantileBreaks",
  //  numberOfBins: 7,
  //  colorScale: colors.colorbrewer.YlOrBr,
  //  reverse: true
  //},
  
  // EC Economic Variables
  
	{
		variable: 'Poverty %',
		numerator: 'EC03',
		nProperty: 'povP',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
	{
		variable: 'Per Capita Income',
		numerator: 'EC03',
		nProperty: 'pciE',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
  {
		variable: 'Unemployment %',
		numerator: 'EC03',
		nProperty: 'unempP',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
  {
		variable: 'Count of Working Population',
		numerator: 'EC01',
		nProperty: 'totWrkE',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
	{
		variable: 'Employed % - Education',
		numerator: 'EC01',
		nProperty: 'eduP',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
	{
		variable: 'Employed % - High Risk of Injury ',
		numerator: 'EC01',
		nProperty: 'hghRskP',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
	{
		variable: 'Employed % - Health Care',
		numerator: 'EC01',
		nProperty: 'hltCrP',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
	{
		variable: 'Employed % - Retail',
		numerator: 'EC01',
		nProperty: 'retailP',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
	{
		variable: 'Count of Essential Workers',
		numerator: 'EC02',
		nProperty: 'essnWrkE',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
	{
		variable: 'Essential Workers %',
		numerator: 'EC02',
		nProperty: 'essnWrkP',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
	{
		variable: 'Foreclosure & Delinquency %',
		numerator: 'EC04',
		nProperty: 'fordq_rate',
    numberOfBins: 5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.YlOrBr
	},
//   // BE Built Environment

  	{
  		variable: 'Urban-Suburban-Rural',
  		numerator: 'BE02',
  		nProperty: 'rurality',
      categorical: true, 
      fixedScale: ["Rural", "Suburban", "Urban"],
      colorScale: colors.colorbrewer.Spectral
  	},
  	{
  		variable: 'Urban Population Total (2010)',
  		numerator: 'BE02_C',
  		nProperty: 'urbPop10',
      numberOfBins: 5,
      binning:'quantileBreaks',
      colorScale: colors.colorbrewer.Spectral
  	},
  	{
  		variable: 'Rural Population Total (2010)',
  		numerator: 'BE02_C',
  		nProperty: 'rurlPop10',
      numberOfBins: 5,
      binning:'quantileBreaks',
      colorScale: colors.colorbrewer.Spectral
  	},
  	{
  		variable: 'Rural Population % (2010)',
  		numerator: 'BE02_C',
  		nProperty: 'cenRuralP',
      numberOfBins: 5,
      binning:'quantileBreaks',
      colorScale: colors.colorbrewer.Spectral
  	},
  {
		variable: 'Total Occupied Housing Units',
		numerator: 'BE01',
		nProperty: 'totUnits', 
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
	{
		variable: 'Occupied Housing Units %',
		numerator: 'BE01',
		nProperty: 'occP',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
	{
		variable: 'Vacant Housing Units %',
		numerator: 'BE01',
		nProperty: 'vacantP',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
	{
		variable: 'Mobile Homes %',
		numerator: 'BE01',
		nProperty: 'mobileP',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
	{
		variable: 'Long-Term Occupancy %',
		numerator: 'BE01',
		nProperty: 'lngTermP',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
	{
		variable: 'Rentals %',
		numerator: 'BE01',
		nProperty: 'rentalP',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
	{
		variable: 'Housing Unit Density',
		numerator: 'BE01',
		nProperty: 'unitDens',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
  {
		variable: 'Land Area (Square Miles)',
		numerator: 'BE03',
		nProperty: 'areaSqMi',
    numberOfBins:8,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
  {
		variable: 'Total Alcohol Outlets',
		numerator: 'BE03',
		nProperty: 'alcTotal',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
	{
		variable: 'Alcohol Outlets Density',
		numerator: 'BE03',
		nProperty: 'alcDens',
    numberOfBins:6,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.BuPu
	},
	// {
	// 	variable: 'Alcohol Outlets Per Capita',
	// 	numerator: 'BE03',
	// 	nProperty: 'alcPerCap',
  //   numberOfBins:5,
  //   binning:'naturalBreaks',
  //   colorScale: colors.colorbrewer.BuPu
	// },
	{
		variable: 'Segregation: Dissimilarity (Black)',
		numerator: 'BE05',
		nProperty: 'dissim.b',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.RdPu
	},
	{
		variable: 'Segregation: Interaction (Black)',
		numerator: 'BE05',
		nProperty: 'inter.bw',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.RdPu
	},
	{
		variable: 'Segregation: Isolation (Black)',
		numerator: 'BE05',
		nProperty: 'iso.b',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.RdPu
	},
	{
		variable: 'Segregation: Dissimilarity (Hispanic)',
		numerator: 'BE05',
		nProperty: 'dissim.h',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.RdPu
	},
	{
		variable: 'Segregation: Interaction (Hispanic)',
		numerator: 'BE05',
		nProperty: 'inter.hw',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.RdPu
	},
	{
		variable: 'Segregation: Isolation (Hispanic)',
		numerator: 'BE05',
		nProperty: 'iso.h',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.RdPu
	},
	{
		variable: 'Segregation: Dissimilarity (Asian)',
		numerator: 'BE05',
		nProperty: 'dissim.a'
	},
	{
		variable: 'Segregation: Interaction (Asian)',
		numerator: 'BE05',
		nProperty: 'inter.aw',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.RdPu
	},
	{
		variable: 'Segregation: Isolation (Asian)',
		numerator: 'BE05',
		nProperty: 'iso.a',
    numberOfBins:5,
    binning:'quantileBreaks',
    colorScale: colors.colorbrewer.RdPu
	},
	{
		variable: 'Hypersegregated Cities',
		numerator: 'BE04',
		nProperty: 'DmySgrg',
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['Not hypersegregated city & metro area',
    'Hypersegregated city & metro area'],
    colorScale: [[102,194,165], [252,141,98]]
	},
	{
		variable: 'African American South',
		numerator: 'BE04',
		nProperty: 'DmyBlckBlt',
    categorical: true,
    fixedScale: [0,1],
    fixedLabels: ['Not African American South / "Black Belt"',
    'African American South / "Black Belt"'],
    colorScale: [[102,194,165], [252,141,98]]
	},
	{
		variable: 'Native American & Tribal Lands',
		numerator: 'BE04',
		nProperty: 'PrcNtvRsrv',
    numberOfBins:5,
    binning:'naturalBreaks',
    colorScale: colors.colorbrewer.Purples
	}

];

const mapModes = {
  "2D": true,
  "3D": false,
  BubbleCartogram: false,
};

const variableHeaders = [
  {
    name: 'Policy Variables',
    startsAt: "Medical marijuana laws"
  },
  {
    name: 'Health Variables',
    startsAt: "Drug-related death rate"
  },
  {
    name: 'Demographic Variables',
    startsAt: "% White Population"
  },
  {
    name: 'Economic Variables',
    startsAt: "Poverty %"
  },
  {
    name: 'Built Environment Variables',
    startsAt: "Urban-Suburban-Rural"
  }
]

let style = {
  variableHeaders: {},
  tooltip: {
    displayOnlyCurrentVariable: true
  }
}

// 🦺 exports below -- you can safely ignore! 🦺 //
variableHeaders.forEach(header => {
  style.variableHeaders[variables.findIndex(f => f.variable === header.startsAt)] = header.name
})

export const dataPresets = {
  data,
  variables,
  mapModes,
  style
};