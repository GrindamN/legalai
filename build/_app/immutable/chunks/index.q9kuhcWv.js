import{b as l}from"./index.C8DUQZ9Q.js";const i=async a=>await fetch(`${l}/utils/gravatar?email=${a}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),null)),r=async a=>{let o=null;const t=await fetch(`${l}/utils/code/format`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:a})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),o=n,n.detail&&(o=n.detail),null));if(o)throw o;return t},s=async a=>await fetch(`${l}/utils/pdf`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:a.title,messages:a.messages})}).then(async t=>{if(!t.ok)throw await t.json();return t.blob()}).catch(t=>(console.log(t),null)),d=async a=>{let o=null;if(await fetch(`${l}/utils/db/download`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.blob()}).then(t=>{const n=window.URL.createObjectURL(t),e=document.createElement("a");e.href=n,e.download="webui.db",document.body.appendChild(e),e.click(),window.URL.revokeObjectURL(n)}).catch(t=>(console.log(t),o=t.detail,null)),o)throw o},h=async a=>{let o=null;if(await fetch(`${l}/utils/litellm/config`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.blob()}).then(t=>{const n=window.URL.createObjectURL(t),e=document.createElement("a");e.href=n,e.download="config.yaml",document.body.appendChild(e),e.click(),window.URL.revokeObjectURL(n)}).catch(t=>(console.log(t),o=t.detail,null)),o)throw o};export{h as a,s as b,d,r as f,i as g};
//# sourceMappingURL=index.q9kuhcWv.js.map
