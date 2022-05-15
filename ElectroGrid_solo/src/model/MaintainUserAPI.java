package model;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MaintainUserAPI
 */
@WebServlet("/MaintainUserAPI")
public class MaintainUserAPI extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	MaintainUser userObj = null;
	
    public MaintainUserAPI() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String output = userObj.insertUserDetails(request.getParameter("u_id"), 
				request.getParameter("f_Name"),
				request.getParameter("l_Name"),
				request.getParameter("address"),
				request.getParameter("phone"),
				request.getParameter("mail"),
				request.getParameter("city"));
				response.getWriter().write(output);
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	{
		
			Map paras = getParasMap(request);
			String output = userObj.updateUserDetails(paras.get("hidItemIDSave").toString(),
			paras.get("u_id").toString(),
			paras.get("f_Name").toString(),
			paras.get("l_Name").toString(),
			paras.get("address").toString(),
			paras.get("phone").toString(),
			paras.get("mail").toString(),
			paras.get("city").toString());
			response.getWriter().write(output);
	}
	
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
			{
			Map paras = getParasMap(request);
			String output = userObj.deleteUserDetails(paras.get("u_num").toString());
			response.getWriter().write(output);
			}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request)
	{
		Map<String, String> map = new HashMap<String, String>();
		try
		{
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ?
					scanner.useDelimiter("\\A").next() : "";
					scanner.close();
					String[] params = queryString.split("&");
					for (String param : params)
					{
						String[] p = param.split("=");
						map.put(p[0], p[1]);
					}
		}
		catch (Exception e){
		}
		
		return map;
	}

}