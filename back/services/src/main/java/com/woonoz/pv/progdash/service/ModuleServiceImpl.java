package com.woonoz.pv.progdash.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.woonoz.pv.progdash.dao.dbo.ModuleInfoDbo;
import com.woonoz.pv.progdash.dao.mapper.ModuleMapper;
import com.woonoz.pv.progdash.dto.ModuleInfoDto;

@Service
@Transactional(propagation = Propagation.MANDATORY)
public class ModuleServiceImpl implements ModuleService {

	@Inject private ModuleMapper moduleMapper;

	class ModuleWithIndex {
		public int index;
		public ModuleInfoDbo module;

		public ModuleWithIndex(int index, ModuleInfoDbo module) {
			this.index = index;
			this.module = module;
		}
	}

	class Route {
		public int routeIndex;
		public List<ModuleWithIndex> modules;

		public Route(int routeIndex) {
			this.routeIndex = routeIndex;
			this.modules = new ArrayList<>();
		}
	}

	private void sameProductSameIndex(List<Route> routes, int productId) {
		int maxIndexInAllRoutes = findMaxIndexInAllRoutes(routes, productId);
		for (Route r : routes) {
			int start = 0;
			for (ModuleWithIndex m : r.modules) {
				if (m.module.getProductId() == productId) {
					shiftIndexes(r.modules, start, maxIndexInAllRoutes - m.index);
				}
				start++;
			}
		}
	}

	private void shiftIndexes(List<ModuleWithIndex> modules, int start, int delta) {
		if (delta == 0)
			return;
		for (int i = start; i < modules.size(); i++) {
			modules.get(i).index += delta;
		}
	}

	private int findMaxIndexInAllRoutes(List<Route> routes, int productId) {
		int res = 0;
		for (Route r : routes) {
			for (ModuleWithIndex m : r.modules) {
				if (m.module.getProductId() == productId) {
					if (m.index > res) {
						res = m.index;
					}
				}
			}
		}
		return res;
	}

	@Override
	public List<ModuleInfoDto> getModulesInfo(int areaId) {

		List<ModuleInfoDbo> dbos = moduleMapper.getModulesInfo(areaId);
		List<ModuleInfoDbo> optionals = new ArrayList<ModuleInfoDbo>();
		List<ModuleInfoDbo> withoutOptionals = new ArrayList<ModuleInfoDbo>();
		List<ModuleInfoDbo> routesWithOptional = new ArrayList<ModuleInfoDbo>();
		List<ModuleInfoDbo> allProductsSortByAbsPos = new ArrayList<ModuleInfoDbo>();
		List<Route> routes = new ArrayList<Route>();

		for (ModuleInfoDbo d : dbos) {
			if (d.getRouteId() == 0) {
				optionals.add(d);
			} else {
				withoutOptionals.add(d);
			}
			allProductsSortByAbsPos.add(d);
		}

		Collections.sort(allProductsSortByAbsPos, new Comparator<ModuleInfoDbo>() {
			@Override
			public int compare(ModuleInfoDbo a, ModuleInfoDbo b) {
				return a.getAbsPos().compareTo(b.getAbsPos());
			}
		});

		HashMap<Long, Boolean> availablesRoutes = new HashMap<>();

		for (ModuleInfoDbo d : withoutOptionals) {
			if (!availablesRoutes.containsKey(d.getRouteId())) {
				availablesRoutes.put(d.getRouteId(), true);
				for (ModuleInfoDbo opt : optionals) {
					if (!existsProductIdForRouteIndex(dbos, opt.getProductId(), d.getRouteId())) {
						routesWithOptional.add(new ModuleInfoDbo(opt.getProductId(), opt.getKey(), d.getRouteId(), opt.getNbrOfRules(), opt.getAbsPos()));
					}
				}
			}
			routesWithOptional.add(d);
		}

		Collections.sort(routesWithOptional, new Comparator<ModuleInfoDbo>() {
			@Override
			public int compare(ModuleInfoDbo a, ModuleInfoDbo b) {
				return a.getAbsPos().compareTo(b.getAbsPos());
			}
		});

		HashMap<Long, Route> routeByRouteId = new HashMap<>();
		for (ModuleInfoDbo m : routesWithOptional) {
			if (!routeByRouteId.containsKey(m.getRouteId())) {
				Route newRoute = new Route(m.getRouteId().intValue());
				routeByRouteId.put(m.getRouteId(), newRoute);
				routes.add(newRoute);
			}
			Route route = routeByRouteId.get(m.getRouteId());
			route.modules.add(new ModuleWithIndex(route.modules.size(), m));
		}

		Collections.sort(routes, new Comparator<Route>() {
			@Override
			public int compare(Route a, Route b) {
				return new Integer(a.routeIndex).compareTo(new Integer(b.routeIndex));
			}
		});

		for (ModuleInfoDbo m : allProductsSortByAbsPos) {
			sameProductSameIndex(routes, m.getProductId().intValue());
		}

		ArrayList<ModuleInfoDto> res = new ArrayList<>();
		for (Route r : routes) {
			for (ModuleWithIndex m : r.modules) {
				res.add(new ModuleInfoDto(m.module.getKey(), m.index, m.module.getNbrOfRules(), m.module.getRouteId(), m.module.getProductId()));
			}
		}
		return res;
	}

	private boolean existsProductIdForRouteIndex(List<ModuleInfoDbo> dbos, Long productId, Long routeId) {
		for (ModuleInfoDbo m : dbos) {
			if (m.getProductId() == productId && m.getRouteId() == routeId) {
				return true;
			}
		}
		return false;
	}
}
