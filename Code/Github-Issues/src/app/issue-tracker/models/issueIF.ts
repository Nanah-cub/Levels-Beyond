export interface IssueIF {
  title: string;
  body: string;
  user: {
    login: string
  };
  assignee: {
    login: string
  };
  activeIssue?: boolean;
  created_at: string;
  updated_at: string;
}
