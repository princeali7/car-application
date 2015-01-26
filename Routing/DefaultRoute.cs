// --------------------------------------------------------------------------------------------------------------------
// <copyright file="DefaultRoute.cs" company="Hewlett-Packard">
//   Copyright © 2015 Hewlett-Packard
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace App.Cars_catalog.Routing
{
    using System.Web.Routing;

    public class DefaultRoute : Route
    {
        public DefaultRoute()
            : base("{*path}", new DefaultRouteHandler())
        {
            this.RouteExistingFiles = false;
        }
    }
}
