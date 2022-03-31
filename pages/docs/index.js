import Head from "next/head";
import { useState, useMemo } from 'react'; 
import styles from "../../styles/Docs.module.css";
import { Gutter } from "../../components/layout/Gutter";
import MainNav from "../../components/layout/MainNav";
import Footer from "../../components/layout/Footer";
import { variables } from '../../meta/variables';
// import RemoteMarkdownModal from "@components/markdown/RemoteMarkdownModal";

const VariableTable = ({table, filters}) => 
<div className={styles.tableContainer}>
  <table className={styles.variableTable}>
    <tbody>
    <tr>
      <th>Variable Construct</th>
      <th>Variable Proxy</th>
      <th>Source</th>
      <th>Metadata</th>
      <th>Spatial Scale</th>
    </tr>
    {table.map(row => (!filters.scale.length || filters.scale.some(scale => row['Spatial Scale'].includes(scale))) ? <tr key={row['Variable Construct']}>
      <td width="15%">{row['Variable Construct']}</td>
      <td width="25%">{row['Variable Proxy']}</td>
      <td width="15%">{row['Source']}</td>
      <td width="15%">{row['markdownPrefix']}<a href={`docs/${row['markdown']}`}>{row['markdownText']}</a></td>
      <td width="15%">{row['Spatial Scale']}</td>
    </tr> : null)}
    </tbody>
  </table>
</div>

const tableNames = [
  "Geographic Boundaries",
  "Policy Variables",
  "Health Variables",
  "Demographic Variables",
  "Economic Variables",
  "Built Environment Variables",
  "COVID Variables"
]

const uniqueScales = [
  'State',
  'County',
  'Tract',
  'Zip'
]

export default function DataDocs() {
  const [activeMd, setActiveMd] = useState(false)
  const [activeFilters, setActiveFilters] = useState({
    scale: [],
    topic: []
  })
  
  const MainHead = () => useMemo(() => <Head>
    <title>About :: OEPS Dashboard</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="true"
    />
    <link
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
    />
    <noscript>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,900;1,400;1,700&family=Lora:ital@0;1&display=swap"
      />
    </noscript>
  </Head>,[])

  const handlefilter = (val, type) => {
    setActiveFilters(prev => { 
      let previousType = prev[type].length ? [...prev[type]] : []; 
      let parsed = previousType.includes(val) 
        ? [...previousType.slice(0, previousType.indexOf(val)), ...previousType.slice(previousType.indexOf(val)+1, previousType.length)]
        : [...previousType, val] 

      return {
        ...prev,
        [type]: parsed      
      }
    })
  }

  return (
    <div className={`${styles.container} ${activeMd ? styles.fixed : ''}`} tabIndex={activeMd ? -1 : 0}>
      <MainHead />
      <MainNav />
      <main className={styles.main}>
        <h1 className={styles.title}>Data Docs</h1>
        <Gutter em={1} />
        <p>Variable constructs are grouped thematically below to highlight the multi-dimensional risk environment of opioid use in justice populations. In the <b>Metadata</b> column, linked pages provide more detail about the data source, descriptions of data cleaning or processing, and individual variables included.</p>
        <Gutter em={1} />
        <div className="row">
          <div className="col-xs-12 col-md-8">
            <h3>Filter by Topic</h3>
            {tableNames.map(topic => <button key={topic} onClick={() => handlefilter(topic, 'topic')} className={`${styles.filterButton} ${activeFilters.topic.includes(topic) ? styles.active : ' '}`}>{topic}</button>)}
          </div>
          <div className="col-xs-12 col-md-4">
            <h3>Filter by Scale</h3>
            {uniqueScales.map(scale => <button key={scale} onClick={() => handlefilter(scale, 'scale')} className={`${styles.filterButton} ${activeFilters.scale.includes(scale) ? styles.active : ' '}`}>{scale}</button>)}
          </div>
        </div>
        <Gutter em={2} />        
        {tableNames.map(header => 
          (
            (!activeFilters.topic.length || activeFilters.topic.includes(header)) 
            && 
            (!activeFilters.scale.length || variables[header].some(row => activeFilters.scale.some(scale => row['Spatial Scale'].includes(scale))))
          ) 
          &&
          <><div className={styles.rowContainer} key={header}>
            <div className="row">
              <div className="col-xs-12 col-lg-3">
                <h2>Geocoded Data Resources</h2>
              </div>
              <div className="col-xs-12 col-lg-9">
                <ul>
                  <li><a href="https://github.com/GeoDaCenter/opioid-policy-scan/tree/master/data_final/moud">MOUD Provider Locations (SAMHSA, 2019)</a></li>
                  <li><a href="https://github.com/GeoDaCenter/opioid-policy-scan/tree/master/data_final/Resources">Opioid Treatment Program (OTP) Locations (SAMHSA, 2020)</a> </li>
                  <li> <a href="https://github.com/GeoDaCenter/opioid-policy-scan/tree/master/data_final/Resources">FQHC Locations (HRSA, 2020)</a></li>
                  <li> <a href="https://github.com/GeoDaCenter/opioid-policy-scan/tree/master/data_final/Resources">Hospital Locations (CovidCareMap, 2020)</a></li>
                  <li> <a href="https://github.com/GeoDaCenter/opioid-policy-scan/tree/master/data_final/Resources">Mental Health Provider Locations (SAMHSA, 2020)</a></li>
                  <li> <a href="https://github.com/GeoDaCenter/opioid-policy-scan/tree/master/data_final/Resources">Pharmacy Locations (InfoGroup, 2018)</a></li>
                </ul>
              </div>
            </div>
            <Gutter em={2} />
          </div>
          <Gutter em={2} />
          <div className={styles.rowContainer} key={header}>
              <div className="row">
                <div className="col-xs-12 col-lg-3">
                  <h2>{header}</h2>
                </div>
                <div className="col-xs-12 col-lg-9">
                  <VariableTable table={variables[header]} setActive={setActiveMd} filters={activeFilters} />
                </div>
              </div>
              <Gutter em={2} />
            </div>
            </>
        )}
      {/* {activeMd && <RemoteMarkdownModal url={activeMd} reset={() => setActiveMd(false)} />} */}
      </main>
      <Footer />
    </div>
  );
}
