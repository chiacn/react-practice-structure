export interface Contest {
  id: number;
  createdAt: string;
  startDate: string;
  endDate: string;
  totalPrize: number;
  category: {
    id: number;
    name: string;
  };
  clientInfo: {
    company: {
      id: number;
      name: string;
      companyDescription?: string;
    };
    industry: {
      id: number;
      name: string;
    };
  };
  briefing: {
    id: number;
    content: string;
  };
  badge?: BadgeItem;
}

export interface ApplyRequest {
  phone: string;
  email: string;
  image: File;
}

export interface ContestStatus {
  status: "pending" | "success" | "fail";
}

export interface BadgeItem {
  badgeIdx: number;
  leftDate: number;
  category: string;
  industry: string;
  [key: string]: string | number;
}
