import { Provider } from "react-redux";
import store from "store";
import { Suspense } from "react";
import routes from "router";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import ZAppHeader from "components/app_header";
import ZMainSlot from "components/app_main";
import { Spin } from "antd";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZAppHeader />
        <ZMainSlot>
          <Suspense
            fallback={
              <div className="loading">
                <Spin tip="Loading..." size="large" />
              </div>
            }
          >
            {renderRoutes(routes)}
          </Suspense>
        </ZMainSlot>

        {/* <ZAppFooter /> */}
      </HashRouter>
    </Provider>
  );
}

export default App;
