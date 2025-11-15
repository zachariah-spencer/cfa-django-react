import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function InfoCard({ cardTitle }: { cardTitle: string}){

  return (
    <>
    <Card className="w-full min-h-90 max-w-sm bg-slate-500 text-slate-200">
      <CardHeader>
        <CardTitle className="text-center text-xl">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="text-center my-auto">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam fuga, deleniti laboriosam recusandae veniam obcaecati blanditiis asperiores illo. Hic ab architecto corrupti aspernatur dolorem consequuntur aut alias, velit quaerat numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem mollitia maxime ab at dolore esse dolorem excepturi assumenda.</p>
      </CardContent>
    </Card>
    </>
  );
}