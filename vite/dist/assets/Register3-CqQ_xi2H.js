import{l as G,j as e,B as y,G as s,T as h,z as I,ah as C,ai as k,ay as S,aj as m,ab as J,ac as R,aC as T,ao as V,t as W,a0 as O,aA as A,aB as Q,az as X,D as Z}from"./index-CWK7PSNF.js";import{c as N,G as U,a as _,F as H,b as $,d as u,e as Y,f as K,A as ee,g as te,h as se}from"./AuthFooter-BfyvMp5V.js";import{r as x}from"./vendor-Bfi0LCKY.js";import{C as re}from"./Checkbox-DNLZqaq1.js";const p=N("https://zxqubkuvhjdwrtzujkis.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cXVia3V2aGpkd3J0enVqa2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MDcwMDMsImV4cCI6MjA0NDk4MzAwM30.KpJQQB3JXvfF4PSvegt8sl5SqMlsQz8arfcUTDRsV4g"),ne=()=>{G();const[c,j]=x.useState(!1),[v,L]=x.useState(!0),[f,P]=x.useState(0),[g,w]=x.useState(""),B=()=>j(!c),M=t=>t.preventDefault(),F=(t,r,n)=>{let a=0;t.toLowerCase().includes(r.toLowerCase())||t.toLowerCase().includes(n.toLowerCase())?w("Password should not contain your first or last name."):w(""),t.length>8&&a++,/[A-Z]/.test(t)&&a++,/[0-9]/.test(t)&&a++,/[^A-Za-z0-9]/.test(t)&&a++,P(a)},q=async(t,{setErrors:r,setStatus:n,setSubmitting:a})=>{try{const{data:o,error:i}=await p.auth.admin.listUsers();if(o==null?void 0:o.users.some(D=>D.email===t.email)){r({submit:"Email is already registered!"}),a(!1);return}const{data:d,error:b}=await p.auth.signUp({email:t.email,password:t.password,options:{data:{first_name:t.fname,last_name:t.lname}}});if(b)throw b;alert("Registration successful! Please check your email to verify your account."),n({success:!0})}catch(o){n({success:!1}),r({submit:o.message}),a(!1)}},z=async t=>{try{const{data:r,error:n}=await p.auth.signInWithIdToken({provider:"google",token:t.credential});if(n)throw n;alert("Google Login successful!")}catch(r){alert("Google Login failed! "+r.message)}},E=()=>{switch(f){case 1:return"error";case 2:return"warning";case 3:return"secondary";case 4:return"success";default:return"error"}};return e.jsx(U,{clientId:"55908007976-as1h970k93b5c9s2hjrq8pldbuiknrob.apps.googleusercontent.com",children:e.jsx(y,{sx:{p:3},children:e.jsx(s,{container:!0,justifyContent:"center",children:e.jsxs(s,{item:!0,xs:100,sm:40,md:20,children:[e.jsx(h,{variant:"h4",align:"center",gutterBottom:!0,children:"Register"}),e.jsx(y,{textAlign:"center",mb:2,children:e.jsx(_,{onSuccess:z,onError:()=>alert("Google Login Failed")})}),e.jsx(H,{initialValues:{fname:"",lname:"",email:"",password:"",submit:null},validationSchema:$().shape({fname:u().required("First name is required"),lname:u().required("Last name is required"),email:u().email("Must be a valid email").required("Email is required"),password:u().min(6,"Password must be at least 6 characters").required("Password is required")}),onSubmit:q,children:({errors:t,handleBlur:r,handleChange:n,handleSubmit:a,isSubmitting:o,touched:i,values:l})=>e.jsx("form",{noValidate:!0,onSubmit:a,children:e.jsxs(s,{container:!0,spacing:2,children:[e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(I,{fullWidth:!0,label:"First Name",name:"fname",value:l.fname,onBlur:r,onChange:n,error:!!(i.fname&&t.fname),helperText:i.fname&&t.fname})}),e.jsx(s,{item:!0,xs:12,sm:6,children:e.jsx(I,{fullWidth:!0,label:"Last Name",name:"lname",value:l.lname,onBlur:r,onChange:n,error:!!(i.lname&&t.lname),helperText:i.lname&&t.lname})}),e.jsx(s,{item:!0,xs:12,children:e.jsxs(C,{fullWidth:!0,error:!!(i.email&&t.email),children:[e.jsx(k,{children:"Email Address"}),e.jsx(S,{type:"email",name:"email",value:l.email,onBlur:r,onChange:n,label:"Email Address"}),i.email&&t.email&&e.jsx(m,{children:t.email})]})}),e.jsx(s,{item:!0,xs:12,children:e.jsxs(C,{fullWidth:!0,error:!!(i.password&&(t.password||g)),children:[e.jsx(k,{children:"Password"}),e.jsx(S,{type:c?"text":"password",name:"password",value:l.password,onBlur:r,onChange:d=>{n(d),F(d.target.value,l.fname,l.lname)},endAdornment:e.jsx(J,{position:"end",children:e.jsx(R,{onClick:B,onMouseDown:M,edge:"end",children:c?e.jsx(Y,{}):e.jsx(K,{})})}),label:"Password"}),e.jsx(T,{variant:"determinate",value:f*25,color:E(),sx:{mt:1}}),g&&e.jsx(m,{error:!0,children:g}),i.password&&t.password&&e.jsx(m,{children:t.password})]})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(V,{control:e.jsx(re,{checked:v,onChange:d=>L(d.target.checked)}),label:"I agree to the terms and conditions"})}),t.submit&&e.jsx(s,{item:!0,xs:12,children:e.jsx(m,{error:!0,children:t.submit})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(W,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",disabled:o,children:"Register"})})]})})})]})})})})},ce=()=>{const c=O(j=>j.breakpoints.down("md"));return e.jsx(ee,{children:e.jsxs(s,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(s,{item:!0,xs:12,children:e.jsx(s,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(s,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(te,{children:e.jsxs(s,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(s,{item:!0,sx:{mb:3},children:e.jsx(A,{to:"#","aria-label":"theme logo",children:e.jsx(Q,{})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(s,{container:!0,direction:{xs:"column-reverse",md:"row"},alignItems:"center",justifyContent:"center",children:e.jsx(s,{item:!0,children:e.jsxs(X,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(h,{color:"secondary.main",gutterBottom:!0,variant:c?"h3":"h2",children:"Sign up"}),e.jsx(h,{variant:"caption",fontSize:"16px",textAlign:{xs:"center",md:"inherit"},children:"Enter your credentials to continue"})]})})})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(ne,{})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(Z,{})}),e.jsx(s,{item:!0,xs:12,children:e.jsx(s,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(h,{component:A,to:"/pages/login/login3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),e.jsx(s,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(se,{})})]})})};export{ce as default};