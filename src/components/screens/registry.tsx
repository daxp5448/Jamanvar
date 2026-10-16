import type { ComponentType } from "react";
import type { ScreenId } from "@/content/screens";
import { DashboardScreen, InventoryScreen, OwnerPhoneScreen, PurchaseOrderScreen, ReportsScreen } from "./BackOfficeScreens";
import { FloorPlanScreen, KdsScreen, TableDetailScreen } from "./FloorKitchenScreens";
import { CaptainNotesScreen, CaptainScreen, QrMenuScreen } from "./OrderingScreens";
import { OfflinePosScreen, PosMenuScreen, PosSettlementScreen } from "./PosScreens";

/** The coded component for each product screen. */
export const SCREEN_COMPONENTS: Record<ScreenId, ComponentType> = {
  pos: PosSettlementScreen,
  "pos-menu": PosMenuScreen,
  offline: OfflinePosScreen,
  kds: KdsScreen,
  tables: FloorPlanScreen,
  inventory: InventoryScreen,
  reports: ReportsScreen,
  "purchase-order": PurchaseOrderScreen,
  dashboard: DashboardScreen,
  qr: QrMenuScreen,
  "table-detail": TableDetailScreen,
  owner: OwnerPhoneScreen,
  captain: CaptainScreen,
  "captain-notes": CaptainNotesScreen,
};
