import { Pipe } from "@angular/core";

@Pipe({
   name: 'secondstominutes' 
})
export class DistanceTimePipe 
{
    transform(value: any): any {
        if (value == null)
        {
            return null;
        }
        else 
        {
            return (value/60).toFixed(0);
        }
    }

}
