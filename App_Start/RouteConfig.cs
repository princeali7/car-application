// --------------------------------------------------------------------------------------------------------------------
// <copyright file="RouteConfig.cs" company="Hewlett-Packard">
//   Copyright © 2015 Hewlett-Packard
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Cars_catalog
{
    using System.Web.Routing;

    using App.Cars_catalog.Routing;

    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.Add("Default", new DefaultRoute());
        }
    }
}
