import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Realtime AI Ops Platform</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Dashboard initial — backend à venir
          </p>
          <Button className="mt-4">Create item</Button>
        </CardContent>
      </Card>
    </div>
  )
}
