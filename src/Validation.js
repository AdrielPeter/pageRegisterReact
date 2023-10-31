export default function Validation(datas){
    
        if (datas.nameInput !== '' && datas.emailInput !== '' && datas.numberInput !== '' && datas.numberRepeatInput !== '') {
    
            let infos = JSON.parse(localStorage.getItem('infos') || '[]')
      
            infos.push({
              name: datas.nameInput,
              email: datas.emailInput,
              number: datas.numberInput
            })
      
            localStorage.setItem('infos', JSON.stringify(infos))
      
        }else{
            alert('error')
        }
    }