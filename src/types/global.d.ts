type TrackingConstants = {
  org: {
    CG: "cg";
    CMO: "cmo";
    CS: "cs";
    CTO: "cto";
    IIP: "iip";
    PTG: "ptg";
    SBSEG: "sbseg";
  };
  purpose: {
    CARE: "care";
    MKTG: "mktg";
    IDENTITY: "identity";
    INTERNAL: "internal";
    PROD: "prod";
  };
  scope: {
    ACCT_COMM: "acct_comm";
    APPSCOM: "appscom";
    CAPITAL: "capital";
    CORP: "corp";
    CPP: "cpp";
    DESKTOP: "desktop";
    DEVELOPER: "developer";
    DEVX: "devx";
    IDENTITY: "identity";
    IDX: "idx";
    IEP: "iep";
    INSURANCE: "insurance";
    INTRANET: "intranet";
    ITO: "ito";
    LACERTE: "lacerte";
    LIFELINE: "lifeline";
    MINT: "mint";
    MKTG_SITE: "mktg_site";
    MYACCT: "myacct";
    PAYMENTS: "payments";
    PAYROLL: "payroll";
    PF_COMM: "pf_comm";
    PROSERIES: "proseries";
    QB: "mktg_site";
    QBLIVE: "qblive";
    QBM: "qbm";
    QBMONEY: "qbmoney";
    QBO: "qbo";
    QBOA: "qboa";
    QBSE: "qbse";
    SBX_ACCT: "sbx_acct";
    SBX_TP: "sbx_tp";
    SALESFORCE: "salesforce";
    TURBO: "turbo";
    TURBOTAX: "turbotax";
    TXP: "txp";
    TXP_BLOG: "txp_blog";
  };
  uiAction: {
    CHANGED_SELECTION: "changed selection";
    CLICKED: "clicked";
    CLICKING: "clicking";
    DRAGGED: "dragged";
    DRAGGED_AND_DROPPED: "dragged and dropped";
    ENTERED: "entered";
    ERROR: "error";
    HIDDEN: "hidden";
    HOVERED_OVER: "hovered over";
    KEYPRESSED: "keypressed";
    SELECTED: "selected";
    SLID: "slid";
    STARTED: "started";
    TOGGLED: "toggled";
    UNSELECTED: "unselected";
    VIEWED: "viewed";
    INTERACTED: "interacted";
  };
  env: {
    PROD: "prod";
    QA: "qa";
    DEV: "dev";
    GOLDEN: "golden";
    PREPROD: "preprod";
    E2E: "e2e";
    TEST: "test";
  };
};

// declare global {
declare const YEXT_PUBLIC_ENVIRONMENT: string;
declare const YEXT_PUBLIC_TRACKSTAR_WRITE_KEY: string;
declare const YEXT_PUBLIC_FILTER_ID: string;
declare const YEXT_PUBLIC_LABEL_LOOKUP_MAP: string;
declare const YEXT_PUBLIC_REVIEWS_API_KEY: string;
declare const YEXT_PUBLIC_STREAMS_API_KEY: string;
declare const APP_VERSION: string;

interface Window {
  intuit: {
    tracking: {
      ecs: {
        webAnalytics: {
          initConfig?: {
            org: string;
            purpose: string;
            scope: string;
            oilClientAssetAlias?: string;
          };
          setApplicationTrackingContext: (
            appName: string,
            appVersion: string,
            scopeArea: string,
            screen: string,
            options?: Record<string, any>
          ) => void;
          trackPage: (data: {
            scope_area: string;
            screen: string;
            action: "viewed";
            object: "screen";
            ui_action: "viewed";
            ui_object: "screen";
            object_detail?: string;
            custom_properties?: Record<string, any>;
          }) => void;
          track: (
            data: {
              scope_area: string;
              screen: string;
              action: string;
              object: string;
              object_detail?: string;
              ui_action: TrackingConstants["uiAction"][keyof TrackingConstants["uiAction"]];
              ui_object: string;
              ui_object_detail?: string;
              custom_properties?: Record<string, any>;
              page_experience?: string;
            },
            event?: {
              targetElement: HTMLElement;
              clickEvent: MouseEvent;
            }
          ) => void;
          constants: TrackingConstants;
        };
      };
    };
  };
}

// }
