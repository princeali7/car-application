// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Global.asax.cs" company="Hewlett-Packard">
//   Copyright © 2015 Hewlett-Packard
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Cars_catalog
{
    using System.Web;
    using System.Web.Optimization;
    using System.Web.Routing;

    public class Application : HttpApplication
    {
        protected void Application_Start()
        {
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}
