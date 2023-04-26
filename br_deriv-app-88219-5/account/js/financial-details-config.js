!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/shared"),require("@deriv/translations")):"function"==typeof define&&define.amd?define(["@deriv/shared","@deriv/translations"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/shared"),require("@deriv/translations")):e["@deriv/account"]=t(e["@deriv/shared"],e["@deriv/translations"])}(self,((e,t)=>(()=>{"use strict";var a={"@deriv/shared":t=>{t.exports=e},"@deriv/translations":e=>{e.exports=t}},l={};function n(e){var t=l[e];if(void 0!==t)return t.exports;var o=l[e]={exports:{}};return a[e](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{n.d(o,{default:()=>p});var e=n("@deriv/translations"),t=n("@deriv/shared"),a=function(){return[{value:"Less than $25,000",text:(0,e.localize)("Less than $25,000")},{value:"$25,000 - $50,000",text:(0,e.localize)("$25,000 - $50,000")},{value:"$50,001 - $100,000",text:(0,e.localize)("$50,001 - $100,000")},{value:"$100,001 - $500,000",text:(0,e.localize)("$100,001 - $500,000")},{value:"Over $500,000",text:(0,e.localize)("Over $500,000")}]},l=function(){return[{value:"0-1 year",text:(0,e.localize)("0-1 year")},{value:"1-2 years",text:(0,e.localize)("1-2 years")},{value:"Over 3 years",text:(0,e.localize)("Over 3 years")}]},i=function(){return[{value:"0-5 transactions in the past 12 months",text:(0,e.localize)("0-5 transactions in the past 12 months")},{value:"6-10 transactions in the past 12 months",text:(0,e.localize)("6-10 transactions in the past 12 months")},{value:"11-39 transactions in the past 12 months",text:(0,e.localize)("11-39 transactions in the past 12 months")},{value:"40 transactions or more in the past 12 months",text:(0,e.localize)("40 transactions or more in the past 12 months")}]},r=l,s=i,u=l,c=i,v=a,d=l,m=i;const p=function(n,o){var p=n.real_account_signup_target,_=function(t){var a,l,n,o,i,r,s,u,c=t.financial_assessment;return{account_turnover:{supported_in:["maltainvest"],default_value:null!==(a=null==c?void 0:c.account_turnover)&&void 0!==a?a:"",rules:[["req",(0,e.localize)("Please select an option")]]},education_level:{supported_in:["maltainvest"],default_value:null!==(l=null==c?void 0:c.education_level)&&void 0!==l?l:"",rules:[["req",(0,e.localize)("Please select an option")]]},employment_industry:{default_value:null!==(n=null==c?void 0:c.employment_industry)&&void 0!==n?n:"",supported_in:["maltainvest"],rules:[["req",(0,e.localize)("Please select an option")]]},estimated_worth:{default_value:null!==(o=null==c?void 0:c.estimated_worth)&&void 0!==o?o:"",supported_in:["maltainvest"],rules:[["req",(0,e.localize)("Please select an option")]]},income_source:{default_value:null!==(i=null==c?void 0:c.income_source)&&void 0!==i?i:"",supported_in:["maltainvest"],rules:[["req",(0,e.localize)("Please select an option")]]},net_income:{default_value:null!==(r=null==c?void 0:c.net_income)&&void 0!==r?r:"",supported_in:["maltainvest"],rules:[["req",(0,e.localize)("Please select an option")]]},occupation:{default_value:null!==(s=null==c?void 0:c.occupation)&&void 0!==s?s:"",supported_in:["maltainvest"],rules:[["req",(0,e.localize)("Please select an option")]]},source_of_wealth:{default_value:null!==(u=null==c?void 0:c.source_of_wealth)&&void 0!==u?u:"",supported_in:["maltainvest"],rules:[["req",(0,e.localize)("Please select an option")]]}}}({financial_assessment:n.financial_assessment});return{header:{active_title:(0,e.localize)("Complete your financial assessment"),title:(0,e.localize)("Financial assessment")},body:o,form_value:(0,t.getDefaultFields)(p,_),props:{validate:(0,t.generateValidationFunction)(p,_),account_turnover_enum:a(),binary_options_trading_experience_enum:l(),binary_options_trading_frequency_enum:i(),cfd_trading_experience_enum:r(),cfd_trading_frequency_enum:s(),education_level_enum:[{value:"Primary",text:(0,e.localize)("Primary")},{value:"Secondary",text:(0,e.localize)("Secondary")},{value:"Tertiary",text:(0,e.localize)("Tertiary")}],employment_industry_enum:[{value:"Construction",text:(0,e.localize)("Construction")},{value:"Education",text:(0,e.localize)("Education")},{value:"Finance",text:(0,e.localize)("Finance")},{value:"Health",text:(0,e.localize)("Health")},{value:"Tourism",text:(0,e.localize)("Tourism")},{value:"Information & Communications Technology",text:(0,e.localize)("Information & Communications Technology")},{value:"Science & Engineering",text:(0,e.localize)("Science & Engineering")},{value:"Legal",text:(0,e.localize)("Legal")},{value:"Social & Cultural",text:(0,e.localize)("Social & Cultural")},{value:"Agriculture",text:(0,e.localize)("Agriculture")},{value:"Real Estate",text:(0,e.localize)("Real Estate")},{value:"Food Services",text:(0,e.localize)("Food Services")},{value:"Manufacturing",text:(0,e.localize)("Manufacturing")},{value:"Unemployed",text:(0,e.localize)("Unemployed")}],employment_status_enum:[{value:"Employed",text:(0,e.localize)("Employed")},{value:"Pensioner",text:(0,e.localize)("Pensioner")},{value:"Self-Employed",text:(0,e.localize)("Self-Employed")},{value:"Student",text:(0,e.localize)("Student")},{value:"Unemployed",text:(0,e.localize)("Unemployed")}],forex_trading_experience_enum:u(),forex_trading_frequency_enum:c(),estimated_worth_enum:[{value:"Less than $100,000",text:(0,e.localize)("Less than $100,000")},{value:"$100,000 - $250,000",text:(0,e.localize)("$100,000 - $250,000")},{value:"$250,001 - $500,000",text:(0,e.localize)("$250,001 - $500,000")},{value:"$500,001 - $1,000,000",text:(0,e.localize)("$500,001 - $1,000,000")},{value:"Over $1,000,000",text:(0,e.localize)("Over $1,000,000")}],income_source_enum:[{value:"Salaried Employee",text:(0,e.localize)("Salaried Employee")},{value:"Self-Employed",text:(0,e.localize)("Self-Employed")},{value:"Investments & Dividends",text:(0,e.localize)("Investments & Dividends")},{value:"Pension",text:(0,e.localize)("Pension")},{value:"State Benefits",text:(0,e.localize)("State Benefits")},{value:"Savings & Inheritance",text:(0,e.localize)("Savings & Inheritance")}],net_income_enum:v(),occupation_enum:[{value:"Chief Executives, Senior Officials and Legislators",text:(0,e.localize)("Chief Executives, Senior Officials and Legislators")},{value:"Managers",text:(0,e.localize)("Managers")},{value:"Professionals",text:(0,e.localize)("Professionals")},{value:"Clerks",text:(0,e.localize)("Clerks")},{value:"Personal Care, Sales and Service Workers",text:(0,e.localize)("Personal Care, Sales and Service Workers")},{value:"Agricultural, Forestry and Fishery Workers",text:(0,e.localize)("Agricultural, Forestry and Fishery Workers")},{value:"Craft, Metal, Electrical and Electronics Workers",text:(0,e.localize)("Craft, Metal, Electrical and Electronics Workers")},{value:"Plant and Machine Operators and Assemblers",text:(0,e.localize)("Plant and Machine Operators and Assemblers")},{value:"Cleaners and Helpers",text:(0,e.localize)("Cleaners and Helpers")},{value:"Mining, Construction, Manufacturing and Transport Workers",text:(0,e.localize)("Mining, Construction, Manufacturing and Transport Workers")},{value:"Armed Forces",text:(0,e.localize)("Armed Forces")},{value:"Government Officers",text:(0,e.localize)("Students")},{value:"Unemployed",text:(0,e.localize)("Unemployed")}],other_instruments_trading_experience_enum:d(),other_instruments_trading_frequency_enum:m(),source_of_wealth_enum:[{value:"Accumulation of Income/Savings",text:(0,e.localize)("Accumulation of Income/Savings")},{value:"Cash Business",text:(0,e.localize)("Cash Business")},{value:"Company Ownership",text:(0,e.localize)("Company Ownership")},{value:"Divorce Settlement",text:(0,e.localize)("Divorce Settlement")},{value:"Inheritance",text:(0,e.localize)("Inheritance")},{value:"Investment Income",text:(0,e.localize)("Investment Income")},{value:"Sale of Property",text:(0,e.localize)("Sale of Property")}]},passthrough:["residence_list","is_fully_authenticated"]}}})(),o.default})()));