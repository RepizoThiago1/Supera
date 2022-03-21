using Microsoft.AspNetCore.Mvc;
using ValidadorCPF.Service;


namespace ValidadorCPF.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class CpfController : ControllerBase
    {
        public IValidateCpfService _validateCpfService;
        public CpfController(IValidateCpfService validateCpfService)
        {
            _validateCpfService = validateCpfService;
        }
        [HttpPost("ValidarCPF")]
        public bool ValidarCPF(string cpf)
        {
            _validateCpfService.IsCpf(cpf);

            if (_validateCpfService.IsCpf(cpf))
            {
                return true;
            }
            return false;
        }
    }
}
