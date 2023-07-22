import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface ExcelState {
    devices: any[];
    setDevices: (devices:any[]) => void
    events: any[];
    setEvents: (events:any[]) => void
    alerts: any[];
    setAlerts: (alerts:any[]) => void
    uptime: any[];
    setUptime: (uptime:any[]) => void
}

export const useExcelStore = create<ExcelState>()(
    devtools(
      persist(
        (set) => ({
            devices: [],
            setDevices: (devices:any[]) => set({devices}),
            events: [],
            setEvents: (events:any[]) => set({events}),
            alerts: [],
            setAlerts: (alerts:any[]) => set({alerts}),
            uptime: [],
            setUptime: (uptime:any[]) => set({uptime}),
        }),
        {
          name: 'excel-storage',
        }
      )
    )
  )