import React, { useState } from 'react'

function MetricRow({name, value}) {
  return <div className="metric"><strong>{name}</strong><span>{value === null ? '—' : value}</span></div>
}

export default function Dashboard(){
  const [url, setUrl] = useState('https://example.com')
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null)
  const [selected, setSelected] = useState(null)

  async function analyze(){
    setLoading(true)
    setData(null)

    try{
      // const res = await fetch(`/projectB/analyze?url=${encodeURIComponent(url)}`)
      const res = await fetch(
  `http://127.0.0.1:8000/projectB/analyze?url=${encodeURIComponent(url)}`
);
      const json = await res.json()
      setData(json)
      setSelected(json.target?.url)
    }catch(err){
      alert('Error: ' + err.message)
    }finally{
      setLoading(false)
    }
  }

  const top5 = data?.competitors || []
  const all = data?.all || []

  return (
    <div>
      <div className="controls">
        <input value={url} onChange={e=>setUrl(e.target.value)} />
        <button onClick={analyze} disabled={loading}>{loading ? 'Analyzing...' : 'Analyze'}</button>
      </div>

      <div className="grid">

        {/* LEFT: Top 5 competitors + details */}
        <div className="card">
          <h3>Top 5 Competitors</h3>

          {top5.map(c=>(
            <div key={c.url} className={"competitor " + (selected===c.url ? 'selected':'')}>
              <div>
                <a className="link" onClick={()=>setSelected(c.url)}>
                  {c.url}
                </a>
                <div style={{fontSize:12, color:'#666'}}>Score: {c.final_score}</div>
              </div>
              <div>{c.rank}</div>
            </div>
          ))}

          {/* Details Pane */}
          <div className="card" style={{marginTop:20}}>
            <h4>Selected Site Details</h4>
            {!selected && <div>Select a site.</div>}

            {selected && (() => {
              const item = all.find(a=>a.url===selected)
              if(!item) return <div>No data</div>
              return (
                <div>
                  <strong>{item.url}</strong>
                  <div className="metrics">
                    {Object.entries(item.scores).map(([k,v])=>(
                      <MetricRow key={k} name={k} value={v} />
                    ))}
                    <MetricRow name="Total Score" value={item.final_score} />
                  </div>
                </div>
              )
            })()}
          </div>
        </div>

        {/* RIGHT: All ranks */}
        <div className="card">
          <h3>All Ranked Sites</h3>

          <div className="all-list">
            {all.map(c=>(
              <div key={c.url} className={"competitor " + (selected===c.url ? 'selected':'')}>
                <div>
                  <a className="link" onClick={()=>setSelected(c.url)}>
                    {c.url}
                  </a>
                  <div style={{fontSize:12, color:'#666'}}>
                    Score: {c.final_score} — Rank {c.rank}
                  </div>
                </div>
                <div>{c.rank}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
