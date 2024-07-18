    import Badge from "./badge";
    import { themes } from "./data";
    import { shapes } from "./data";

    export default function BadgeSection(){
        
        const themeKeys = Object.keys(themes);
       

        const BadgeSectionEl = shapes.map(item => {
                return <div className="flex-badge sroll-custom">     
            {  themeKeys.map(themeColor => {
                return  <Badge 
                      shape={item} 
                      colors={themeColor}
                  >
                      Badge
                  </Badge>
                  })
              }
              </div>
  
        })
        return(
            <>
            
            <div className="badge-section container">
                <h2>Badge</h2>
            {BadgeSectionEl}
            <Badge colors={"sss"} shape={'pills'}>HI</Badge>
            </div>
            </>
        )
    }