package br.com.notasfiscais.listener;

import javax.faces.event.PhaseEvent;
import javax.faces.event.PhaseId;
import javax.faces.event.PhaseListener;

public class CicloVidaListener implements PhaseListener {

	@Override
	public void afterPhase(PhaseEvent e){
		System.out.println("Antes: "+e.getPhaseId());
	}

	@Override
	public void beforePhase(PhaseEvent e) {
		System.out.println("Depois: "+e.getPhaseId());
	}

	@Override
	public PhaseId getPhaseId() {
		return PhaseId.ANY_PHASE;
	}

}
